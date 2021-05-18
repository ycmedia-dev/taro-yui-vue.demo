<template>
  <view v-reSize id="container" class="container">
    <y-section title="付款信息" tip="最多9张" :required="true">
      <template #title-right>
        <view class="add-btn">
          添加
        </view>
      </template>
      内容区
    </y-section>
    <y-section title="收款信息">
      内容区
    </y-section>
    <y-section title="商品信息">
    </y-section>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import "./section.scss";
export default defineComponent({
  components: {
    // 'y-section': defineAsyncComponent(() => import('@/components/yui/section/section.vue'))
    "y-section": defineAsyncComponent(
      () =>
        import(
          "../../../../taro-yui-vue/src/components/section/section.vue"
        )
    )
  },
  setup() {
    return {
    };
  },
});
</script>
