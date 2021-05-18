<template>
  <view v-reSize id="container" class="container">
    <view class="box">
      <y-radio :value="2"
               v-model="radioValue1">可选项</y-radio>
      <y-radio :value="2" v-model="radioValue">选中项</y-radio>
    </view>

    <view>
      <y-radio :value="1" v-model="radioValue" :disabled="disabled">不可选项</y-radio>
      <y-radio :value="2" v-model="radioValue" :disabled="disabled">已选中，不可改</y-radio>
    </view>

  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent,Ref,ref } from 'vue'
import './radio.scss'

class RadioService{
  /**
   * 单选框选中值
   */
  radioValue1:Ref<number> = ref(0)

  /**
   * 单选框选中值
   */
  radioValue:Ref<number> = ref(2)

  /**
   * 是否不可选
   */
  disabled = ref(true)
}

export default defineComponent({
  components: {
    'y-radio': defineAsyncComponent(() => import('@/components/yui/radio/radio.vue'))
  },
  setup() {
    const service = new RadioService()
    return {
      radioValue: service.radioValue,
      radioValue1: service.radioValue1,
      disabled: service.disabled
    };
  }
});
</script>
