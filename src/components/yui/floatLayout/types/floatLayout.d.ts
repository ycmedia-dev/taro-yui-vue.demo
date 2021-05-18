/**
 * 图像
 */
export declare namespace FloatLayout {
    
    // #region props
    /**
     * 属性
     */
    export interface FloatLayoutProps extends Record<string, unknown> {

      /**
       * 是否显示弹窗
       */
      isOpened: boolean

      /**
       * 弹窗类型: middle或bottom, 默认bottom
       */
      type: string

      /***
       * 弹窗宽度：只限类型为middle
       */
      width?: number|string

      /**
       * 弹窗标题
       */
      title: string

      /**
       * id选择器，如：#a
       */
      elementName: string

      /**
       * 外部定点id
       */
      maskOuterElId: string
    }
    //#endregion props

  // #region events
  /**
   * 事件
   */
  interface Events {
    /***
     * 关闭弹窗触发
     */
    onClose: string
  }
  //#endregion events
}
