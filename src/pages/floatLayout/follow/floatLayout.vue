<template>
  <view v-reSize id="container" class="container">
    <y-float-layout :isOpened="isOpened"
                    type="follow"
                    :elementName="btnElId"
                    @onClose="onCatchCloseFloatLayout">
      这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
      随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
    </y-float-layout>

    <view class="box" @tap="onOpenFloatLayout">
      点击打开弹窗
      <view :id="btnElId"></view>
    </view>

  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, Ref, ref, onMounted } from 'vue'
import Taro from "@tarojs/taro"
import './floatLayout.scss'

class FloatLayout{
  /***
   * 是否显示弹窗
   */
  isOpened: Ref<boolean> = ref(false)

  /**
   * 按钮元素id
   */
  btnElId: string = this.randomStr(16)

  constructor() {

  }

  /**
   * 生成随机字符串
   * @param long 长度
   */
  private randomStr(long: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const maxPos = chars.length;
    var string = '';
    for (var i = 0; i < long; i++) {
      string += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return string;
  }

  /***
   * 点击按钮显示弹窗
   */
  onOpenFloatLayout(e) {
    this.isOpened.value = true
  }

  /***
   * 关闭弹窗组件
   */
  onCatchCloseFloatLayout () {
    this.isOpened.value = false
  }
}


export default defineComponent({
  components: {
    'y-float-layout': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/floatLayout/floatLayout.vue'))
    // 'y-float-layout': defineAsyncComponent(() => import('@/components/yui/floatLayout/floatLayout.vue'))
  },
  setup() {
    const service = new FloatLayout()
    return {
      isOpened: service.isOpened,
      btnElId: service.btnElId,
      onOpenFloatLayout: service.onOpenFloatLayout.bind(service),
      onCatchCloseFloatLayout: service.onCatchCloseFloatLayout.bind(service),
    };
  }
});
</script>
