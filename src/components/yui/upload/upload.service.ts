import './upload.scss'
import Taro from '@tarojs/taro'
import { TaroEvent } from '@tarojs/components/types/event'
import { PropType, SetupContext, defineComponent, ref, Ref, inject, watch } from 'vue'
import IconPreview from './assets/img/icon_preview.svg'
import IconCloseCircle from './assets/img/icon_close_circle.svg'
import IconPlus from './assets/img/icon_plus.svg'
import IconPdf from './assets/img/icon_pdf.svg'
import IconLoading from './assets/img/icon_loading.gif'
import IconFresh from './assets/img/icon_fresh.svg'
import { upload } from './utils/upyun'
import dayjs from 'dayjs'
import { YUpload, UploadStatusTypeEnum, FileUrlTypeEnum, UploadTypeEnum } from './types/upload.d'
import { UPDATE_MODEL_EVENT } from './utils/constants'
import { uploadKey } from './token'

/**
 * 图像上传
 */
class UploadService {
  /**
   * 上下文
   */
  private context: SetupContext
  /**
   * 参数
   */
  options: YUpload.YUploadOptions

  /**
   * 图片列表
   * */
  imgList: Ref<YUpload.ImgItem[]> = ref([])

  /**
   * 视频弹窗
   */
  isShowVideoModal = ref(false)

  /**
   * 弹窗中视频url
   */
  videoModalUrl = ref('')

  /**
   * 上传公共参数
   */
  private uploadProperties: YUpload.UploadProperties

  constructor(props: YUpload.Props, context: SetupContext) {
    this.uploadProperties = inject(uploadKey) as YUpload.UploadProperties
    if (!this.uploadProperties) {
      throw new Error('使用y-upload组件必须先provide uploadKey')
    }
    this.context = context
    this.options = {
      ...{
        multiple: false,
        type: [UploadTypeEnum.IMAGE],
        count: 1,
      },
      ...props.options
    };
    if (<number>this.options.count > 1) {
      this.options.multiple = true;
    }
    if (<number>this.options.count > 99) {
      this.options.count = 99;
    }
    if (this.options.multiple && <number>this.options.count === 1) {
      this.options.multiple = false
    }
    if (!Array.isArray(props.modelValue)) {
      throw new Error('v-model 必须为string数组')
    }
    this.toSetUploadImg(props.modelValue)
    watch(() => props.modelValue, (newVal) => {
      this.toSetUploadImg(newVal)
    }, {
      deep: true
    })
  }

  /**
   * 设置已经上传的图片回填
   * @param data url集合
   * */
  private toSetUploadImg(data: string[]): void {
    if (!data.length) {
      return
    }
    let imgList: YUpload.ImgItem[] = []
    data.length && data.forEach((url: string) => {
      let fileType: UploadTypeEnum = UploadTypeEnum.IMAGE;
      switch (url.substring(url.lastIndexOf('.'))) {
        case ".mp4":
          fileType = UploadTypeEnum.VIDEO;
          break;
        case ".pdf":
          fileType = UploadTypeEnum.PDF;
          break;
        default:
          fileType = UploadTypeEnum.IMAGE;
          break;
      }
      imgList.push({
        url,
        fileType,
        isLoading: UploadStatusTypeEnum.LOADED
      })
    });
    this.imgList.value = imgList
  }

  /**
   * 获取已上传的图片
   * */
  private toGetAllUrlList(): string[] {
    let list: string[] = []
    this.imgList.value.forEach((item: YUpload.ImgItem) => {
      if (item.url.includes(this.uploadProperties.domain)) {
        list.push(item.url)
      }
    })
    return list
  }

  /**
   * 点击重新上传
   * */
  async onClickUploadAgain(item: YUpload.ImgItem) {
    if (item.isLoading !== UploadStatusTypeEnum.LOADING_AGAIN) { return }

    const fileInfoRes = await Taro.getFileInfo({
      filePath: item.url
    })
    if (fileInfoRes.errMsg !== 'getFileInfo:ok') {
      item.isLoading = UploadStatusTypeEnum.LOADING_AGAIN // 重新加载
      return
    }
    let urlType = item.url.replace(/.+\./, "")
    let url = `upload/${dayjs().format('YYYY-MM-DD')}/${(fileInfoRes as Taro.getFileInfo.SuccessCallbackResult).digest}.${urlType}`
    let res = await upload(this.uploadProperties, {
      localPath: item.url,
      remotePath: url
    }) as Taro.uploadFile.SuccessCallbackResult
    if (res.errMsg === 'uploadFile:ok') {
      const data = JSON.parse(res.data)
      item.url = `https://${this.uploadProperties.domain}/${data.url}`
      item.isLoading = UploadStatusTypeEnum.LOADED // no loading
    } else {
      item.isLoading = UploadStatusTypeEnum.LOADING_AGAIN // 重新加载
    }
    let allUrlList = await this.toGetAllUrlList()
    this.context.emit(UPDATE_MODEL_EVENT, allUrlList)
  }

  /**
   * 点击删除
   * */
  async onClickDeleteImg(e: TaroEvent<HTMLInputElement>, index: number) {
    e.stopPropagation()
    this.imgList.value.splice(index, 1)
    let allUrlList = await this.toGetAllUrlList()
    this.context.emit(UPDATE_MODEL_EVENT, allUrlList)
  }

  /**
   * 点击预览
   */
  onClickPreviewImg(e: TaroEvent<HTMLInputElement>, index: number) {
    e.stopPropagation()
    let item = this.imgList.value[index]
    let list: string[] = this.imgList.value.map(item => {
      return item.url
    })
    switch (item.fileType) {
      case UploadTypeEnum.IMAGE:
        Taro.previewImage({
          current: item.url,
          urls: list
        })
        break;
      case UploadTypeEnum.VIDEO:
        this.isShowVideoModal.value = true
        this.videoModalUrl.value = item.url
        break;
      case UploadTypeEnum.PDF:
        Taro.downloadFile({
          url: item.url,
          success: (res) => {
            Taro.openDocument({
              filePath: res.tempFilePath
            })
          }
        })
        break;
    }
  }

  /**
   * 验证文件后缀是否存在
   * @param path 文件路径
   * @param extensionList 支持的后缀列表 
   * @returns 
   */
  private existsFileExtension(path: string, extensionList: string[]): boolean {
    for (let i = 0; i < extensionList.length; i++) {
      if (path.indexOf(extensionList[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

  /**
   * 点击上传按钮
   * */
  async onClickUpLoad() {
    const { count, type } = this.options
    let chooseType: keyof Taro.chooseMessageFile.selectType = 'image'

    let itemList: string[] = []
    type?.forEach((item) => {
      switch (item) {
        case UploadTypeEnum.IMAGE:
          itemList.push("上传图片")
          chooseType = 'image'
          break;
        case UploadTypeEnum.VIDEO:
          itemList.push("上传视频")
          chooseType = 'video'
          break
        case UploadTypeEnum.PDF:
          itemList.push("上传PDF")
          chooseType = 'file'
          break
      }
    })

    let extension: string[] = []
    if (itemList.length > 1) {
      const res = await Taro.showActionSheet({
        itemList
      });

      switch (itemList[res.tapIndex]) {
        case '上传图片':
          chooseType = "image"
          break;
        case '上传视频':
          chooseType = "video"
          break;
        case '上传PDF':
          chooseType = "file"
          extension.push("pdf")
          break;
      }
    }

    const uploadRes: YUpload.ImgItem[] = [];
    let canChooseCount = <number>count - this.imgList.value.length > 100
      ? 100 : <number>count - this.imgList.value.length
    try {
      const res = await Taro.chooseMessageFile({
        count: canChooseCount,
        type: chooseType,
        extension: extension.length > 0 ? extension : undefined
      })
      res.tempFiles.forEach((item) => {
        uploadRes.push({
          url: item.path,
          fileType: item.type,
          isLoading: UploadStatusTypeEnum.LOADING // loading
        })
      })
    } catch (e) {
      if(chooseType === 'file'){
        Taro.showToast({
          icon:'none',
          title:"请在手机上操作，pc端暂不支持此功能"
        })
        return
      }
      let canChooseCount = <number>count - this.imgList.value.length > 9
        ? 9 : <number>count - this.imgList.value.length
      const res = await Taro.chooseMedia({
        count: canChooseCount,
        mediaType: [chooseType]
      })
      res.tempFiles.forEach((item) => {
        uploadRes.push({
          url: item.tempFilePath,
          fileType: chooseType,
          isLoading: UploadStatusTypeEnum.LOADING // loading
        })
      })
    }

    console.log(uploadRes, 'uploadRes');
    let fileItem:YUpload.ImgItem;
    for (let i = 0; i < uploadRes.length; i++) {
      fileItem = uploadRes[i];
      if (extension.length > 0 && !this.existsFileExtension(fileItem.url, extension)) {
        Taro.showToast({
          title: "不支持此后缀",
          icon: 'none'
        })
        return;
      }
      this.imgList.value.push(fileItem)
    }
    for (let i = 0; i < this.imgList.value.length; i++) {
      let obj: YUpload.ImgItem = this.imgList.value[i] as YUpload.ImgItem
      if (obj.url.includes(this.uploadProperties.domain)) {
        continue
      }
      const fileInfoRes = await Taro.getFileInfo({
        filePath: obj.url
      })
      if (fileInfoRes.errMsg !== 'getFileInfo:ok') {
        obj.isLoading = UploadStatusTypeEnum.LOADING_AGAIN // 重新加载
        continue
      }

      let urlType = obj.url.replace(/.+\./, "")
      let url = `upload/${dayjs().format('YYYY-MM-DD')}/${(fileInfoRes as Taro.getFileInfo.SuccessCallbackResult).digest}.${urlType}`
      let res = await upload(this.uploadProperties, {
        localPath: obj.url,
        remotePath: url
      }) as Taro.uploadFile.SuccessCallbackResult
      try {
        const { statusCode, data: oldData } = res
        const data = JSON.parse(oldData)
        if (statusCode === 200 && data.message === 'ok') {
          obj.url = `https://${this.uploadProperties.domain}/${data.url}`
          obj.isLoading = UploadStatusTypeEnum.LOADED // no loading
        } else {
          obj.isLoading = UploadStatusTypeEnum.LOADING_AGAIN // 重新加载
          Taro.showToast({
            title: '上传失败，请重新上传',
            icon: "none"
          })
        }
      } catch (e) {
        obj.isLoading = UploadStatusTypeEnum.LOADING_AGAIN // 重新加载
        Taro.showToast({
          title: '上传失败，请重新上传',
          icon: "none"
        })
      }

    }
    let allUrlList = await this.toGetAllUrlList()
    this.context.emit(UPDATE_MODEL_EVENT, allUrlList)
  }

  /**
   * 关闭弹窗
   */
  onHideModal() {
    this.isShowVideoModal.value = false
    this.videoModalUrl.value = ''
  }
}

export default defineComponent({
  name: 'y-upload',
  props: {
    pattern: {
      type: String as PropType<string>,
      default: 'edit'
    },
    options: {
      type: Object as PropType<YUpload.YUploadOptions>,
      default: {
        multiple: false,
        count: 1
      }
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: true,
      default: []
    }
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props: YUpload.Props, context: SetupContext) {
    const service = new UploadService(props, context)
    return {
      IconCloseCircle,
      IconPlus,
      IconPdf,
      IconLoading,
      IconFresh,
      IconPreview,
      UploadTypeEnum,
      imgList: service.imgList,
      options: service.options,
      isShowVideoModal: service.isShowVideoModal,
      videoModalUrl: service.videoModalUrl,
      onClickUploadAgain: service.onClickUploadAgain.bind(service),
      onClickDeleteImg: service.onClickDeleteImg.bind(service),
      onClickPreviewImg: service.onClickPreviewImg.bind(service),
      onClickUpLoad: service.onClickUpLoad.bind(service),
      onHideModal: service.onHideModal.bind(service),
    };
  }
});
