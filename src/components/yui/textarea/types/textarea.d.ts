export declare namespace YTextarea {

  //#region props
  /**
   * 属性
   */
  export interface Props extends Record<string, unknown> {
    /***
     * 模式：可编辑edit/可查看view, 默认edit
     */
    pattern?: string

    /**
     * 参数
     */
    options:TextAreaOptions

    /**
     * 值，必填
     */
    modelValue: string
  }

  /**
   * textarea参数
   */
  export interface TextAreaOptions {

    /**
     *  最大输入字数，默认值：200
     */
    maxLength?: number

    /**
     *  提示信息，非必填
     */
    placeholder?: string

    /**
     *  高度，默认值：200
     */
    height?: number

    /**
     * 是否禁用，默认值：false
     */
    disabled?: boolean

    /**
     * 是否自动聚焦，默认值：false
     */
    autoFocus?: boolean

    /**
     * 是否显示字数，默认值true
     */
    showCount?: boolean

    /**
     * 是否自动增高
     */
    autoHeight?: boolean
  }
  //#endregion props
}
