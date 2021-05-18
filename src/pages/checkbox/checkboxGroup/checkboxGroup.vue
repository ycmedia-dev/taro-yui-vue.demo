<template>
  <view v-reSize id="container" class="container">
    兴趣：
    <y-checkbox-group v-model="checkboxGroupValue">
      <y-checkbox :value="1">游泳</y-checkbox>
      <y-checkbox :value="2">听音乐</y-checkbox>
      <y-checkbox :value="3">打篮球</y-checkbox>
      <y-checkbox :value="4">玩游戏</y-checkbox>
    </y-checkbox-group>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, Ref, ref } from "vue";
import "./checkboxGroup.scss";
import {Checkbox} from '@/components/yui/checkbox/types/checkbox.d';

/**
 * 多选框组
 */
class CheckboxGroupService {
  /**
   * 单选框选中值
   */
  checkboxGroupValue: Ref<number[]> = ref([2]);

  /**
   * checkbox发生变化
   */
  onCheckboxChange(value:Checkbox.IModelType[]){
    console.log(value)
  }
}

export default defineComponent({
  components: {
    'y-checkbox': defineAsyncComponent(() => import('@/components/yui/checkbox/checkbox.vue')),
    'y-checkbox-group': defineAsyncComponent(() => import('@/components/yui/checkboxGroup/checkboxGroup.vue'))
    // 'y-checkbox': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/checkbox/checkboxButton.vue')),
    // 'y-checkbox-group': defineAsyncComponent(() => import('../../../../../taro-yui-vue/src/components/checkboxGroup/checkboxGroup.vue'))
  },
  setup() {
    const service = new CheckboxGroupService();
    return {
      checkboxGroupValue: service.checkboxGroupValue,
      onCheckboxChange: service.onCheckboxChange.bind(service),
    };
  },
});
</script>
