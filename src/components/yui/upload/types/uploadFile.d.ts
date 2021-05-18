/***
 * Taro.getFileInfo 临时文件
 */
export interface SuccessCallbackResult {
  /***
   * 错误信息
   */
  errMsg: string

  digest: string

  /**
   * 文件大小，以字节为单位
   */
  size: number
}

/***
 * Taro.getFileInfo 临时文件 错误
 */
export interface FailCallbackResult {
  /***
   * 错误信息
   */
  errMsg: string
}

/***
 * 上传接口返回
 */
export interface UploadResponse {
  code: number
  'file_size': number
  'image-frames': number
  'image-height': number
  'image-type': string
  'image-width': number
  'message': string
  'mimetype': string
  'time': number
  'url': string
}
