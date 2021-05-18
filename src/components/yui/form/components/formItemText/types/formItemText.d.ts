/**
 * 表单项-文本
 */
export declare namespace YFormItemText {
    
    // #region props
    /**
     * 属性
     */
    export interface Props extends Record<string, unknown> {

        /**
         * 绑定值
         */
        modelValue: string

      options: FormItemTextOptions
    }

  /**
   * 纯文本
   */
  export interface FormItemTextOptions {
    /**
     * 提示信息
     */
    placeholder: string
  }
    //#endregion props
}
