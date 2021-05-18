/**
 * 文件上传
 */
export declare namespace YUpload {

  // #region props
  /**
   * 属性
   */
  export interface Props extends Record<string, unknown> {
    /***
     * 模式：可编辑edit/可查看view, 默认edit
     */
    pattern?: string

    /**
     * 参数
     */
    options: YUploadOptions

    /**
     * 图片url列表，必填
     */
    modelValue: string[]
  }

  /**
   * 参数
   */
  export interface YUploadOptions {

    /**
     * 是否支持多选 默认false
     */
    multiple?: boolean

    /**
     * 上传类型：图片image/视频video， 默认图片
     */
    type?: UploadTypeEnum[]

    /**
     * 最多可以选择的图片张数
     * 默认为1，当multiple为true时候，为99，此选项设置和multiple冲突时，以该项优先
     */
    count?: number
  }
  //#endregion props

  export interface ImgItem extends Record<string, unknown> {
    /**
     * 地址
     * */
    url: string

    /**
     * 类型，video/image
     */
    fileType: string


    /**
     * 状态
     * */
    isLoading: string
  }

  /**
   * 参数
   * */
  export interface Params extends Record<string, unknown> {
    type: string
    parentIndex: number
  }

  //#region events
  export interface Events{
    /**
     * 上传触发
     */
    onChange: string[]
  }
  //#endregion events

  /**
   * 上传参数
   */
  export interface UploadOptions {

    /**
     * 本地文件路径
     */
    localPath: string

    /**
     * 在又拍云存储的文件路径，例：/upload/
     */
    remotePath: string
  }

  /**
   * 上传全局参数
   */
  export interface UploadProperties {

    /**
     * 查询上传签名url
     */
    getSignatureUrl: string

    /**
     * 空间名
     */
    bucket: string

    /**
     * 操作员
     */
    operator:string

    /**
     * 上传后的域名，如：yyres.bcadx.com
     */
    domain:string
  }
}

/**
 * 元素类型
 */
export enum UploadStatusTypeEnum {
  /**
   * 上传中
   */
  LOADING = "1",
  /**
   * 上传完成
   */
  LOADED = "2",
  /**
   * 重新上传
   */
  LOADING_AGAIN = "3",
}

/**
 * url类型
 */
export enum FileUrlTypeEnum {
  /**
   * 视频后缀
   */
  MP4 = 'mp4',
}

//#region UploadTypeEnum
/**
 * 上传类型
 */
export enum UploadTypeEnum {
  /**
   * 视频
   */
  VIDEO= 'video',

  /**
   * 图片
   */
  IMAGE = 'image',

  /**
   * pdf文件
   */
  PDF = 'pdf'
}
//#endregion UploadTypeEnum
