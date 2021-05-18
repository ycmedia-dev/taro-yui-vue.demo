<template>
  <view v-reSize id="container" class="demo-container">
    兴趣：
    <y-checkbox :value="1" v-model="checkboxValue" type="button" :disabled="true">游泳</y-checkbox>
    <y-checkbox :value="2" v-model="checkboxValue" type="button" :disabled="true">听音乐</y-checkbox>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent,Ref,ref, watch } from 'vue'
import './checkboxButton.scss'

/**
 * 多选框
 */
class CheckboxService{

  /**
   * 多选框选中值
   */
  checkboxValue:Ref<number[]> = ref([2])

  constructor(){
    watch(this.checkboxValue,(value)=>{
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
      checkboxValue: service.checkboxValue
    };
  }
});
</script>
