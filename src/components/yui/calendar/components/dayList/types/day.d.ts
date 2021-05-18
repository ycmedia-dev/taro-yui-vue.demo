import { Dayjs } from 'dayjs'
import { CalendarBasic } from '../../../calendarBasic/types/calendarBasic.d'
/**
 * 天
 */
export declare namespace Day {
  //#region props
  /**
   * 属性
   */
  export interface DayProps extends Record<string, unknown> {

    /**
     * 开始日期
     */
    startDate: Dayjs

    /**
     * 结束日期
     */
    endDate?: string

    /**
     * 当月日期
     */
    modelValue: Dayjs

    /**
   * 是否多选，默认：false
   */
    isMultiSelect?: boolean

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

  //#region props
  /**
   * CurrentDate
   */
  export interface SettedCurrentDate extends Record<string, unknown> {

    type: string

    val: string[] | SelectedDateRange
  }
  //#endregion props

  // #region props
  /**
   * 天集合item
   */
  export interface DayItem extends Record<string, unknown> {

    /**
     * 日期类型
     * **/
    type: CalenderDayType

    /**
     * 日
     * **/
    day: number

    /**
     * 日期
     */
    date: Dayjs

    /**
     * class属性
     */
    className: string
  }
  //#endregion props

  /***
   * 选中范围
   */
  // #region props
  export interface SelectedDateRange extends Record<string, unknown> {
    /***
     * 开始时间
     */
    start: string

    /***
     * 结束时间
     */
    end: string
  }
  //#endregion props

  export interface Events {

    /**
     * 月份发生变化
     */
    onMonthChange: Dayjs

    /**
     * 日期选中事件
     */
    onSelectDate: CalendarBasic.SelectDateCallbackResult
  }
}
export enum CalenderDayType {

  /**
   * 上个月
   */
  PREV_MONTH = "prev_month",

  /**
   * 本月
   */
  CURRENT_MONTH = "current_month",

  /**
   * 下个月
   */
  NEXT_MONTH = "next_month"
}
