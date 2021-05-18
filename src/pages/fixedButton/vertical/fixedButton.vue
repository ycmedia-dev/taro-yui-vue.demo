<template>
  <view v-reSize id="container" class="container">
    <y-fixed-button
      :btnLabelList="btnLabelList"
      :direction="DirectionType.VERTICAL"
      @click="onClick"
    ></y-fixed-button>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import "./fixedButton.scss";
import {FixedButton,DirectionType} from '@/components/yui/fixedButton/types/fixedButton.d'
// import {FixedButton,DirectionType} from '../../../../../taro-yui-vue/src/components/fixedButton/types/fixedButton.d'

/**
 * 底部固定button
 */
class FixedButtonService {

  /**
   * 点击事件
  */
  onClick(result:FixedButton.ClickCallbackResult){
    alert(`${result.index===0?'保存':'删除'}事件`)
  }
}

export default defineComponent({
  components: {
    // 'y-fixed-button': defineAsyncComponent(() => import('@/components/yui/fixedButton/fixedButton.vue'))
    'y-fixed-button': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/fixedButton/fixedButton.vue'))
  },
  setup() {
    const service = new FixedButtonService()
    return {
      DirectionType,
      btnLabelList: ["确定", "删除"],
      onClick:service.onClick.bind(service)
    };
  },
});
</script>
