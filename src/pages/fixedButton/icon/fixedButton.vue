<template>
  <view v-reSize id="container" class="container">
    <y-fixed-button
      :btnLabelList="btnLabelList"
      @click="onClick"
    >
      <template v-slot="slotProps">
        <image v-if="slotProps.info.idx === 0" class="img-button" :src="IconCustomActionBuy"></image>
        <image v-if="slotProps.info.idx === 1" class="img-button" :src="IconCancel"></image>
      </template>

    </y-fixed-button>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import "./fixedButton.scss";
import IconCustomActionBuy from '@/assets/img/custom_action_buy.svg'
import IconCancel from '@/assets/img/icon_cancel.svg'
// import {FixedButton} from '@/components/fixedButton/types/fixedButton.d'
import {FixedButton} from '@/components/yui/fixedButton/types/fixedButton.d'

/**
 * 底部固定button
 */
class FixedButtonService {

  /**
   * 点击事件
  */
  onClick(result:FixedButton.ClickCallbackResult){
    alert(`${result.index===0?'确定':'取消'}事件`)
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
      IconCustomActionBuy,
      IconCancel,
      btnLabelList: ["确定", "取消"],
      onClick:service.onClick.bind(service)
    };
  },
});
</script>
