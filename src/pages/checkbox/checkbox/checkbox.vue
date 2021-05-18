<template>
  <view v-reSize id="container" class="container">
    <view class="box">
      <y-checkbox :value="1"
                  v-model="checkboxValue1">可选项</y-checkbox>
      <y-checkbox :value="2" v-model="checkboxValue2">选中项</y-checkbox>
    </view>

    <y-checkbox :value="3" v-model="checkboxValue3"  :disabled="true">不可选项</y-checkbox>
    <y-checkbox :value="4" v-model="checkboxValue4" :disabled="true">已选中，不可改</y-checkbox>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent,Ref,ref, watch } from 'vue'
import './checkbox.scss'

/**
 * 多选框
 */
class CheckboxService{

  /**
   * 多选框选中值
   */
  checkboxValue1:Ref<number[]> = ref([])
  checkboxValue2:Ref<number[]> = ref([2])
  checkboxValue3:Ref<number[]> = ref([])
  checkboxValue4:Ref<number[]> = ref([4])

  constructor(){
    watch(this.checkboxValue1,(value)=>{
      console.log(value)
    })
  }
}

export default defineComponent({
  components: {
    'y-checkbox': defineAsyncComponent(() => import('@/components/yui/checkbox/checkbox.vue'))
    // 'y-checkbox': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/checkbox/checkbox.vue'))
  },
  setup() {
    const service = new CheckboxService()
    return {
      checkboxValue1: service.checkboxValue1,
      checkboxValue2: service.checkboxValue2,
      checkboxValue3: service.checkboxValue3,
      checkboxValue4: service.checkboxValue4,
    };
  }
});
</script>
