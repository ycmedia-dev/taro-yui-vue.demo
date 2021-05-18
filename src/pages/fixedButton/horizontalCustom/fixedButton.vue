<template>
  <view v-reSize id="container" class="container">
    <y-fixed-button
      :btnLabelList="btnLabelList"
      :btnTypeList="btnTypeList"
      @click="onClick"
    >
    </y-fixed-button>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import "./fixedButton.scss";
import {FixedButton,DirectionType,BtnType} from '@/components/yui/fixedButton/types/fixedButton.d'
// import {FixedButton,DirectionType,BtnType} from '../../../../../taro-yui-vue/src/components/fixedButton/types/fixedButton.d'


/**
 * 底部固定button
 */
class FixedButtonService {

  /**
   * 按钮类型
   * */
  // btnTypeList = [BtnType.CANCEL]
  btnTypeList= []

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
      btnLabelList: ["取消", '确定'],
      btnTypeList: service.btnTypeList,
      onClick:service.onClick.bind(service)
    };
  },
});
</script>
