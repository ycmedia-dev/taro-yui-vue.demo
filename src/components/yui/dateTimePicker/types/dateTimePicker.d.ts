/**
 * 日期时间
 */
export declare namespace YDateTimePicker {
    
    // #region props
    /**
     * 属性
     */
    export interface YDateTimePickerProps extends Record<string, unknown> {
      /***
       * 模式：可编辑edit/可查看view, 默认edit
       */
      pattern?: string
      /**
       * 参数
       */
      options: timePickerOptions

      /**
       * 值，必填
       */
      modelValue: string
    }

  /**
   * dateTimePicker参数
   */
  export interface timePickerOptions {

    /**
     *  提示信息，非必填
     */
    placeholder?: string

    /**
     * 是否多选，默认：false
     */
    isMultiSelect: boolean

    /**
     * 日期格式化点位符，默认：YYYY-MM-DD
     */
    format:string

    /**
     * 是否可清除, 必填项不可清除， 默认true
     */
    canClear?: boolean

    /**
     * 最小值
     */
    minDate?: string

    /**
     * 最大值
     */
    maxDate?: string
  }
  //#endregion props
}
