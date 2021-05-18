<template>
  <view v-reSize id="container" class="form-item-picker-container">
    <view class="form-item-picker-box">
      <y-form-item-picker v-model="selectedId" :options="options"></y-form-item-picker>
    </view>
  </view>
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent, ref, Ref} from 'vue'
import './formItemPicker.scss'
import { YFormItemPicker } from '@/components/yui/formItemPicker/types/formItemPicker.d'

class FormItemPicker {
  /**
   * 组件信息
   * */
  options: Ref<YFormItemPicker.FormItemPickerInfo> = ref({
    type: 'multiSelector',
    placeholder: '',
    optionList: [
      [{id: 1, label: 'aa'}, {id: 3, label: 'bb'}],
      [{id: 11, label: 'ab1'}, {id: 13, label: 'ab2'}],
    ]
  })

  /***
   * 选中的id
   */
  selectedId = ref([3,13])

  constructor() {

  }
}

export default defineComponent({
  components: {
    'y-form-item-picker': defineAsyncComponent(() => import('@/components/yui/formItemPicker/formItemPicker.vue'))
  },
  setup() {
    const service = new FormItemPicker()

    return {
      options: service.options,
      selectedId: service.selectedId,
    };
  }
});
</script>
