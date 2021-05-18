<template>
  <view id="container" class="container">
    <y-upload v-model="fileList" :options="options"></y-upload>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, Ref } from "vue";
import "./upload.scss";
import { YUpload, UploadTypeEnum } from "@/components/yui/upload/types/upload.d";

class UploadService {
  /**
   * 图片集合
   * */
  fileList: Ref<string[]> = ref([
    "https://yyres.bcadx.com/upload/2021-01-25/b39e762176daeaf30ab0d775e83f162b.md5",
  ]);

  /**
   * 参数
   */
  options: YUpload.YUploadOptions = {
    multiple: true,
    count: 11,
    type: [UploadTypeEnum.IMAGE, UploadTypeEnum.VIDEO, UploadTypeEnum.PDF]
  };
}


export default defineComponent({
  components: {
    'y-upload': defineAsyncComponent(() => import('@/components/yui/upload/upload.vue'))
    // "y-upload": defineAsyncComponent(
    //   () =>
    //     import("../../../../../taro-yui-vue/src/components/upload/upload.vue")
    // ),
  },
  setup() {
    const service = new UploadService();
    return {
      fileList: service.fileList,
      options: service.options,
    };
  },
});
</script>
