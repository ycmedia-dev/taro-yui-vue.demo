/**
 * 时间轴
 */
export declare namespace YTimeline {

  // #region props
  /**
   * 属性
   */
  export interface YTimelineProps extends Record<string, unknown> {
    /**
     * 值
     */
    modelValue: object[]

    /**
     * 标题属性名
     */
    titleProperty?: string

    /**
     * 时间属性名
     */
    dateTimeProperty?: string

    /**
     * 内容属性名
     */
    contentProperty?: string

    /**
     * 操作按钮
     */
    actionList?: ActionTypeEnum[]
  }

  /**
   * 操作按钮信息
   */
  export interface ActionInfo {

    /**
     * class属性
     */
    className: string

    /**
     * 显示的名称
     */
    label: string
  }
  //#endregion props

  //#region events
  export interface Events {

    /**
     * 操作按钮点击事件回调参数
     */
    action: ActionCallbackResult
  }

  /**
   * 操作按钮点击事件返回值
   */
  interface ActionCallbackResult {

    /**
     * 绑定数据
     */
    value: Object

    /**
     * 操作类型
     */
    type: ActionTypeEnum | string
  }
  //#endregion events
}

//#region ActionTypeEnum
/**
 * 操作按钮类型
 */
export enum ActionTypeEnum {
  /**
   * 删除
   */
  DELETE = 'action_delete',

  /**
   * 编辑
   */
  EDIT = 'action_edit',
}
//#endregion ActionTypeEnum
