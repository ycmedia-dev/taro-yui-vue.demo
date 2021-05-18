import { Dayjs } from 'dayjs'
import { CalendarBasic } from '../../../calendarBasic/types/calendarBasic.d'
/**
 * 天
 */
export declare namespace Month {
  //#region props
  /**
   * 属性
   */
  export interface MonthProps extends Record<string, unknown> {
    /**
     * 当月年月
     */
    modelValue: Dayjs

    /**
     * 开始日期
     */
    startDate: Dayjs

    /**
     * 结束日期
     */
    endDate?: string

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
   * 月集合item
   */
  export interface MonthItem extends Record<string, unknown> {

    /**
     * 日期
     */
    date: Dayjs

    /**
     * 月
     * **/
    month: number

    /**
     * 样式名称
     */
    className: string

    /**
     * 文字
     */
    label: string
  }
  //#endregion props

  /***
   * 选中范围
   */

  export interface Events {

    /**
     * 日期选中事件
     */
    onSelectDate: CalendarBasic.SelectDateCallbackResult
  }
}

