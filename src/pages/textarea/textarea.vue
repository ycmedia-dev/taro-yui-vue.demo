<template>
  <view v-reSize class="container">
    <y-textarea
      :options="options"
      v-model="modelValue"
    ></y-textarea>
  </view>
</template>
<script lang="ts">
import { Ref, ref, defineComponent, defineAsyncComponent } from "vue";
import { YTextarea } from "@/components/yui/textarea/types/textarea.d";
import "./textarea.scss";

class YTextareaService {
  /**
   * textarea组件参数
   * */
  options: Ref<YTextarea.TextAreaOptions> = ref({
    height: 100,
    maxLength: 400,
    showCount: true,
    autoHeight: true,
    placeholder: "多行文本框textarea"
  })

  /**
   * textarea值
   */
  modelValue: Ref<string> = ref("");
}

export default defineComponent({
  components: {
    "y-textarea": defineAsyncComponent(
      () => import("@/components/yui/textarea/textarea.vue")
    ),
    // "y-textarea": defineAsyncComponent(
    //   () => import("../../../../taro-yui-vue/src/components/textarea/textarea.vue")
    // ),
  },
  setup() {
    const service = new YTextareaService();
    return {
      options: service.options,
      modelValue: service.modelValue
    };
  },
});
</script>
