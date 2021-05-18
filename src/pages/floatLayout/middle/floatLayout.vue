<template>
  <view v-reSize id="container" class="container">
    <y-float-layout :isOpened="isOpened"
                    type="middle"
                    :width="modalWidth"
                    title="这是标题"
                    @onClose="onCatchCloseFloatLayout">
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
      <template v-slot:footer>
        这是foot
      </template>
    </y-float-layout>

    <button @tap="onOpenFloatLayout">点击打开弹窗</button>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, Ref, ref } from 'vue'
import './floatLayout.scss'

class FloatLayoutService {
  /***
   * 是否显示弹窗
   */
  isOpened: Ref<boolean> = ref(true)

  /**
   * 中间型弹窗的宽度
   * */
  modalWidth: Ref<number> = ref(560)

  /***
   * 点击按钮显示弹窗
   */
  onOpenFloatLayout() {
    this.isOpened.value = true
  }

  /***
   * 关闭弹窗组件
   */
  onCatchCloseFloatLayout() {
    this.isOpened.value = false
  }
}


export default defineComponent({
  components: {
    'y-float-layout': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/floatLayout/floatLayout.vue'))
    // 'y-float-layout': defineAsyncComponent(() => import('@/components/yui/floatLayout/floatLayout.vue'))
  },
  setup() {
    const service = new FloatLayoutService()
    return {
      isOpened: service.isOpened,
      modalWidth: service.modalWidth,
      onOpenFloatLayout: service.onOpenFloatLayout.bind(service),
      onCatchCloseFloatLayout: service.onCatchCloseFloatLayout.bind(service)
    };
  }
});
</script>
