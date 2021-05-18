<template>
  <view v-reSize id="container" class="form-item-picker-container">
    <view class="form-item-picker-box">
      <y-form-item-picker
        v-model="selectedId"
        :options="options"></y-form-item-picker>
    </view>
  </view>
</template>
<script lang="ts">
import { Ref, defineComponent, defineAsyncComponent, ref } from 'vue'
import './formItemPicker.scss'
import { YFormItemPicker } from '@/components/yui/formItemPicker/types/formItemPicker.d'

class FormItemPicker {
  /**
   * 组件信息
   * */
  options: Ref<YFormItemPicker.FormItemPickerInfo> = ref({
    placeholder: '',
    canAll: true,
    optionList: [{id: 1, label: 'aa'}, {id: 3, label: 'bb'}]
  })

  /***
   * 选中的id
   */
  selectedId = ref(0)

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
