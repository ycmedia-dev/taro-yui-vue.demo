<template>
  <view id="container" class="container">
    <y-upload v-model="fileList" :options="options"></y-upload>
  </view>
</template>
<script lang="ts">
import { ref, Ref, defineComponent, defineAsyncComponent } from 'vue'
import './upload.scss'
import { YUpload, UploadTypeEnum } from '@/components/yui/upload/types/upload.d'

class UploadService {
  /**
   * 选中图片值
   * */
  fileList: Ref<string[]> = ref([])

  /**
   * 组件内部参数
   * */
  options: Ref<YUpload.YUploadOptions> = ref({
    placeholder: '最多1张',
    multiple: false,
    type: [UploadTypeEnum.IMAGE, UploadTypeEnum.VIDEO]
  })

  /**
   * 获取组件上传的url
   * @param files 上传url集合
   */
  onCatchChange(files: string[]) {
    console.log('上传集合', files)
  }
}

export default defineComponent({
  components: {
    'y-upload': defineAsyncComponent(() => import('@/components/yui/upload/upload.vue'))
    // 'y-upload': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/upload/upload.vue'))
  },
  setup() {
    const service = new UploadService()
    return {
      fileList: service.fileList,
      options: service.options,
      onCatchChange: service.onCatchChange.bind(service)
    };
  }
});
</script>
