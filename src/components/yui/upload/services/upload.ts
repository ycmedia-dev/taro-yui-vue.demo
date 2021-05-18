import { postJson } from '../utils/http'
import {uploadRequest} from '../types/request/UploadRequest'
import {UploadResponse} from '../types/response/UploadResponse'

/**
 * form表单获得上传签名
 */
export function getSignature(url:string,body: uploadRequest) : Promise<UploadResponse> {
    return postJson<UploadResponse>(url, body)
}