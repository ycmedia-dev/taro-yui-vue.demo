import {PropType, defineComponent, ref, Ref, watch, SetupContext, defineAsyncComponent, inject} from 'vue'
import Taro from '@tarojs/taro'
import { YEditor, YEditorImgElType, YEditorComponentName } from './types/editor.d'
import './editor.scss'
import { upload } from '../upload/utils/upyun'
import { YUpload } from '../upload/types/upload.d'
import { uploadKey } from '../upload/token'
import { ImgElNameAndValue, SameFormatNameImgList } from "./utils/constant"
import dayjs from 'dayjs'

/**
 * 编辑器组件
 */
class EditorService {
  private context: SetupContext

  private props: YEditor.YEditorProps

  /**
   * 图片地址
   */
  baseImgUrl: string = 'https://yyres.bcadx.com/assets/img/editor_icon/'

  /**
   * 选中的样式
   */
  formats: Ref<{[key: string]: string | number}> = ref({})

  /**
   * 编辑器实例化
   */
  editorCtx: any = null

  /**
   * 组件的name
   */
  customComponentName = ''

  /**
   * 颜色:字体颜色/字体背景色
   */
  color = ref('')

  /**
   * 上传公共参数
   */
  private uploadProperties: YUpload.UploadProperties

  constructor(props: YEditor.YEditorProps, context: SetupContext) {
    this.props = props
    this.context = context
    this.uploadProperties = inject(uploadKey) as YUpload.UploadProperties
  }

  /**
   * 插入当前日期
   */
  toInsertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    });
  }

  /**
   * 插入图片
   */
  async toInsertImage() {
    if (!this.uploadProperties) {
      throw new Error('使用上传图片必须先provide uploadKey')
    }
    const uploadRes = await Taro.chooseImage({
      count: 10,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
    })
    if (uploadRes.errMsg !== 'chooseImage:ok') {
      return
    }
    for (let i = 0; i < uploadRes.tempFilePaths.length; i++) {
      let item: string = uploadRes.tempFilePaths[i]
      const fileInfoRes = await Taro.getFileInfo({
        filePath: item
      })
      if (fileInfoRes.errMsg !== 'getFileInfo:ok') {
        continue
      }
      let urlType = item.replace(/.+\./,"")
      let url = `upload/${dayjs().format('YYYY-MM-DD')}/${(fileInfoRes as Taro.getFileInfo.SuccessCallbackResult).digest}.${urlType}`
      let res = await upload(this.uploadProperties, {
        localPath: item,
        remotePath: url
      }) as Taro.uploadFile.SuccessCallbackResult
      if (res.errMsg === 'uploadFile:ok') {
        const data = JSON.parse(res.data)
        const urlRes = `https://${this.uploadProperties.domain}/${data.url}`
        const insertRes = await this.editorCtx.insertImage({
          src: urlRes,
          width: '100%'
        })
        if(insertRes.errMsg !== 'ok') {
          Taro.showToast({
            title: '请稍后重新插入',
            icon: "none"
          })
        }
      } else {
        Taro.showToast({
          title: '请稍后重新插入',
          icon: "none"
        })
      }
    }
  }

  /**
   * 点击图标
   * @param e
   */
  onClickToolBar(e) {
    const { name, value } = e.target.dataset
    if (!name) {
      return
    }
    console.log('name:', name, value)
    if (name !== 'click') {
      this.editorCtx.format(name, value)
      return
    }
    switch (value) {
      case YEditorImgElType.DATE:
        // 日历
        this.toInsertDate()
        break
      case YEditorImgElType.INSERT_DIVIDER:
        // 分割线
        this.editorCtx.insertDivider()
        break
      case YEditorImgElType.INSERT_IMAGE:
        // 图片
        this.toInsertImage()
        break
      case YEditorImgElType.RE_DO:
        // 前进
        this.editorCtx.redo()
        break
      case YEditorImgElType.UN_DO:
        // 后退
        this.editorCtx.undo()
        break
      case YEditorImgElType.REMOVE_FORMAT:
        // 清除样式
        this.editorCtx.removeFormat()
        break
      case YEditorImgElType.CLEAR:
        // 清除内容
        this.editorCtx.clear()
        break
      case YEditorImgElType.FULL_SCREEN:
        // 全屏
        break
    }
  }



  /**
   * 编辑器初始化完成时触发
   */
  onEditorReady() {
    Taro.createSelectorQuery().select('#editor').context((res) => {
      this.editorCtx = res.context
    }).exec(() => {
      this.editorCtx.setContents({
        html: this.props.modelValue
      })
    })
  }

  /**
   * 通过 Context 方法改变编辑器内样式时触发
   */
  onStatusChange(e) {
    console.log(e.detail)
    this.formats.value = e.detail
  }

  /**
   * 编辑器失去焦点
   */
  async onBlurEditor() {
    const res = await this.editorCtx.getContents()
    console.log(res.html)
    if (res.errMsg === 'ok') {
      this.context.emit('update:modelValue', res.html)
    }
  }

  /**
   * 获取组件的name -> ImgElNameAndValue.name
   * @param val 值
   */
  onCatchGetComponentName(val: string) {
    this.customComponentName = val
  }

  /**
   * 清除颜色
   * @param iconName
   */
  onCatchClearColor(iconName: string) {
    const color = iconName === YEditorImgElType.COLOR ? '#000000' : 'transparent'
    this.editorCtx.format(ImgElNameAndValue[iconName].name, color)
  }
}

export default defineComponent({
  name: 'y-editor',
  props: {
    modelValue:{
      type: String as PropType<string>,
      default: ''
    },
    options: {
      type: Object as PropType<YEditor.EditorOptions>,
      default: {
        placeholder: '',
        toolList: [],
        readOnly: false
      },
    },
  },
  emits: ['update:modelValue'],
  components: {
    'y-font-color': defineAsyncComponent(() => import('./components/fontColor/fontColor.vue')),
    'y-background-color': defineAsyncComponent(() => import('./components/backgroundColor/backgroundColor.vue')),
  },
  setup(props: YEditor.YEditorProps, context: SetupContext) {
    const service = new EditorService(props, context)

    watch(() => service.color.value, (newFVal) => {
      const color = service.customComponentName === YEditorImgElType.COLOR && newFVal === 'transparent' ? '#000000' : newFVal
      service.editorCtx.format(service.customComponentName, color)
    })


    return {
      SameFormatNameImgList,
      ImgElNameAndValue,
      YEditorComponentName,
      baseImgUrl: service.baseImgUrl,
      formats: service.formats,
      color: service.color,
      customImgNameList: [YEditorImgElType.COLOR, YEditorImgElType.BACKGROUND_COLOR], // 需要自定义组件的图片集合
      onClickToolBar: service.onClickToolBar.bind(service),
      onEditorReady: service.onEditorReady.bind(service),
      onStatusChange: service.onStatusChange.bind(service),
      onBlurEditor: service.onBlurEditor.bind(service),
      onCatchGetComponentName: service.onCatchGetComponentName.bind(service),
      onCatchClearColor: service.onCatchClearColor.bind(service),
    };
  }
});
