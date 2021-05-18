<template>
  <view v-reSize id="container" class="container">
    权限：
    <y-form-item-checkbox-group :options="optionList" v-model="modelValue">
    </y-form-item-checkbox-group>
  </view>
</template>
<script lang="ts">
  import { defineComponent, defineAsyncComponent, ref, Ref } from "vue";
  import "./formItemCheckboxGroup.scss";
  // import { YForm } from "../../../../taro-yui-vue/src/components/form/types/form.d";
  import { YForm } from "@/components/yui/formItemCheckboxGroup/types/formItemCheckboxGroup.d";

  /**
   * 表单项-多选框组
   */
  class YFormItemCheckboxGroupService {
    /**
     * 表单数据列表
     */
    optionList: YForm.FormItemCheckboxGroupOptions[] = [
      {
        label: "添加",
        value: 1,
      },
      {
        label: "修改",
        value: 2,
      },
      {
        label: "删除",
        value: 3,
      },
    ];

    /**
     * 选中值
     */
    modelValue: Ref<number[]> = ref([1]);
  }

  export default defineComponent({
    components: {
      'y-form-item-checkbox-group': defineAsyncComponent(() => import('@/components/yui/formItemCheckboxGroup/formItemCheckboxGroup.vue'))
      // "y-form-item-checkbox-group": defineAsyncComponent(
      //   () =>
      //     import(
      //       "../../../../taro-yui-vue/src/components/formItemCheckboxGroup/formItemCheckboxGroup.vue"
      //     )
      // ),
    },
    setup() {
      const service = new YFormItemCheckboxGroupService();
      return {
        optionList: service.optionList,
        modelValue: service.modelValue,
      };
    },
  });
</script>
<style lang="scss">
  .container{
    .y-checkbox{
      margin-right: 30px;
    }
  }
</style>
