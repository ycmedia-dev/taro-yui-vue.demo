/**
 * 下拉框
 */
export declare namespace YFormItemPicker {
    
    // #region props
    /**
     * 属性
     */
    export interface YFormItemPickerProps extends Record<string, unknown> {

      /***
       * 模式：可编辑edit/可查看view, 默认edit
       */
      pattern?: string

      /**
       * 组件信息
       */
      options: FormItemPickerInfo

      /**
       * picker选中的id，
       * type===selector => id 默认为0
       * type===multiSelector => id集合 默认为[]
       * type===time => 时间字符串 默认为‘’
       * */
      modelValue: number | number[] | string | string[]
    }

    export interface FormItemPickerInfo extends Record<string, unknown> {
      /**
       * picker类型, 默认selector
       */
      type?: string

      /**
       * 提示信息
       */
      placeholder?: string

      /**
       * 自定义选项，type===region时配置, 默认空
       */
      customItem?: string

      /***
       * 展示的下拉
       */
      optionList?: FormItemPickerOption[] | FormItemPickerOption[][]

      /**
       * 是否可清除, 必填项不可清除， 默认true
       */
      canClear?: boolean

      /**
       * 是否有全部， type === 'selector'时配置, 默认false
       */
      canAll?: boolean
    }

  /**
   * 选择器选项列表项
   */
  export interface FormItemPickerOption extends Record<string, unknown> {
    /**
     * 显示标签
     */
    label: string;

    /**
     * 选项值
     */
    id: number | string;
  }
    //#endregion props

    // #region events
    interface Events {
      /**
       * 点击tab时触发
       */
      onClick: number
    }
  //#endregion events
}
