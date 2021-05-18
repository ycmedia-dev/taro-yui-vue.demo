/**
 * 步骤
 */
export declare namespace YSteps {
    
  // #region props
  /**
   * 属性
   */
  export interface YStepsProps extends Record<string, unknown> {

    /**
     * 步骤条集合
     */
    options: StepItem[]

    /***
     * 当前index
     */
    current: number
  }

  /***
   * 步骤条item
   */
  export interface StepItem extends Record<string, unknown> {
    /**
     * 类名，在页面中定义图标背景图,线和文字颜色
     */
    className: string
    /**
     * 标题
     */
    label: string

    /***
     * 是否当前步骤
     */
    isActive: boolean
  }
    //#endregion props
}
