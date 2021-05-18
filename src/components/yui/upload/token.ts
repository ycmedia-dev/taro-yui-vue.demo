import type { InjectionKey } from 'vue'
import { YUpload } from './types/upload.d'

const uploadKey: InjectionKey<YUpload.UploadProperties> = "y-upload" as any

export {
    uploadKey
}