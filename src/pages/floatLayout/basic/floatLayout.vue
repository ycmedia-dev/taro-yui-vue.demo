<template>
  <view v-reSize id="container" class="container">
    <y-float-layout :isOpened="isOpened"
                    :type="type"
                    :width="modalWidth"
                    title="这是标题"
                    @onClose="onCatchCloseFloatLayout">
      这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
      随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区
      随你怎么写随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区随你怎么写这是内容区@
      <template #footer>
        <y-fixed-button
      :btnLabelList="btnLabelList"
      @click="onClick"
    >
    </y-fixed-button>
      </template>
    </y-float-layout>

    <button @tap="onOpenFloatLayout('bottom')">点击打开底部弹窗</button>
    <button @tap="onOpenFloatLayout('middle')">点击打开中间弹窗</button>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, Ref, ref } from 'vue'
import {FixedButton} from '../../../../../taro-yui-vue/src/components/fixedButton/types/fixedButton.d'
import './floatLayout.scss'

class FloatLayoutService {
  /***
   * 是否显示弹窗
   */
  isOpened: Ref<boolean> = ref(false)

  /**
   * 中间型弹窗的宽度
   * */
  modalWidth: Ref<number> = ref(560)

  /**
   * 弹窗类型: middle或bottom, 默认bottom
   */
  type: Ref<String> = ref('bottom')

  /***
   * 点击按钮显示弹窗
   */
  onOpenFloatLayout(baseType:string) {
    this.type.value = baseType
    this.isOpened.value = true
  }

  /***
   * 关闭弹窗组件
   */
  onCatchCloseFloatLayout() {
    this.isOpened.value = false
  }
  /**
   * 点击事件
  */
  onClick(result:FixedButton.ClickCallbackResult){
    alert(`${result.index===0?'取消':'确定'}事件`)
  }
}


export default defineComponent({
  components: {
    'y-fixed-button': defineAsyncComponent(() => import('@/components/yui/fixedButton/fixedButton.vue')),
    'y-float-layout': defineAsyncComponent(() => import('@/components/yui/floatLayout/floatLayout.vue'))
    // 'y-float-layout': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/floatLayout/floatLayout.vue'))
  },
  setup() {
    const service = new FloatLayoutService()
    return {
      isOpened: service.isOpened,
      modalWidth: service.modalWidth,
      type: service.type,
      btnLabelList: ["取消", "确定"],
      onOpenFloatLayout: service.onOpenFloatLayout.bind(service),
      onCatchCloseFloatLayout: service.onCatchCloseFloatLayout.bind(service),
      onClick:service.onClick.bind(service)
    };
  }
});
</script>
