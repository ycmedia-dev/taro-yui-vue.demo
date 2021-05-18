<template>
  <view v-reSize id="container" class="container">
    <y-page-container>
      内容区
    </y-page-container>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import "./pageContainer.scss";
import { FixedButton } from "../../../../../taro-yui-vue/src/components/fixedButton/types/fixedButton.d";

/**
 * 底部固定button
 */
class FixedButtonService {
  /**
   * 点击事件
   */
  onClick(result: FixedButton.ClickCallbackResult) {
    alert(`${result.index === 0 ? "取消" : "确定"}事件`);
  }
}

export default defineComponent({
  components: {
    // 'y-fixed-button': defineAsyncComponent(() => import('@/components/yui/fixedButton/fixedButton.vue'))
    "y-fixed-button": defineAsyncComponent(
      () =>
        import(
          "../../../../../taro-yui-vue/src/components/fixedButton/fixedButton.vue"
        )
    ),
    "y-page-container": defineAsyncComponent(
      () =>
        import(
          "../../../../../taro-yui-vue/src/components/pageContainer/pageContainer.vue"
        )
    ),
  },
  setup() {
    const service = new FixedButtonService();
    return {
      btnLabelList: ["取消", "确定"],
      onClick: service.onClick.bind(service),
    };
  },
});
</script>
