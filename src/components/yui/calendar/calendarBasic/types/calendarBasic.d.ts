import { Dayjs } from 'dayjs'
/**
 * 日历
 */
export declare namespace CalendarBasic {

  //#region props
  /**
   * 属性
   */
  export interface CalendarBasicProps extends Record<string, unknown> {

    /**
   * 参数
   */
    options: CalendarOptions

    /**
     * 值，必填，开始日期
     */
    modelValue: string
  }

  /**
   * 日历参数
   */
  export interface CalendarOptions {
    /**
     * 日期类型, 默认'date'
     */
    type?: CalendarTypeEnum

    /**
     * 是否多选，默认：false
     */
    isMultiSelect?: boolean

    /**
     * 是否显示工具条，默认：true
     */
    showToolBar?: boolean

    /**
     * 结束日期
     */
    endDate?: string

    /**
     * 最小值
     */
    minDate?: string

    /**
     * 最大值
     */
    maxDate?: string

    /**
     * 日历快捷键配置
     */
    shortcuts?: ShortcutsItem[]
  }

  /**
   * 日历快捷键
   */
  export interface ShortcutsItem {
    /**
     * 文字
     */
    text: string

    /**
     * 值
     */
    value: Function
  }
  //#endregion props

  //#region events
  /**
   * 事件
   */
  export interface Events {

    /**
     * 日期选中事件
     */
    onSelectDate: SelectDateCallbackResult
  }

  /**
   * 选中日期回调参数
   */
  export interface SelectDateCallbackResult {

    /**
     * 开始日期
     */
    startDate: Dayjs

    /**
     * 结束日期
     */
    endDate?: Dayjs
  }
  //#endregion events
}

//#region CalendarTypeEnum
export enum CalendarTypeEnum {
  /**
   * 年月日模式
   */
  DATE= 'date',

  /**
   * 年月模式
   */
  MONTH = 'month',

  /**
   * 年模式
   */
  YEAR = 'year',

  /**
   * 季度
   */
  QUARTER = 'quarter',
}
//#endregion CalendarTypeEnum
