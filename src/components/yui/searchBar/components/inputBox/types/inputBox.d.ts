/**
 * input
 */
export namespace YInputBox {
  // #region props
  /**
   * 属性
   */
  export interface Props extends Record<string, unknown> {
    /**
     * 组件信息
     */
    options: InputInfo

    /**
     * 值
     * */
    modelValue: string
  }
  //#endregion props

  export interface InputInfo extends Record<string, unknown> {
    /**
     * 提示信息
     */
    placeholder:string
  }
}
