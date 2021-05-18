/**
 * 图像
 */
export declare namespace YDateSelector {
    
    // #region props
    /**
     * 属性
     */
    export interface DateSelectorProps extends Record<string, unknown> {

      /***
       * 组件信息
       */
      info: DateSelectorInfo,

      /**
       * 值
       * */
      modelValue: string

    }

    export interface DateSelectorInfo extends Record<string, unknown> {
      /**
       * 是否选择范围
       * */
      isMultiSelect?: boolean

      /**
       * 单选：placeholder文字
       */
      placeholder?: string

      /**
       * 范围：placeholder文字
       */
      startPlaceholder?: string

      /**
       * 范围：placeholder文字
       */
      endPlaceholder?: string

      /**
       * 跟随元素的id
       */
      elementId: string
    }
    //#endregion props
}
