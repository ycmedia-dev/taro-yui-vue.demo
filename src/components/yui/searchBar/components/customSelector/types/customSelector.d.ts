

/**
 * 表单项-自定义选择器
 */
export declare namespace YCustomSelector {
    
    // #region props
    /**
     * 属性
     */
    export interface YCustomSelectorProps extends Record<string, unknown> {

        /**
         * 组件信息
         */
        options: CustomSelectorInfo

        /**
         * 绑定值
         */
        modelValue: string
    }
    //#endregion props

    export interface CustomSelectorInfo extends Record<string, unknown> {
      /**
       * 提示信息
       */
      placeholder: string

      /**
       * 是否可清除，默认true
       */
      canClear?: boolean
    }
}
