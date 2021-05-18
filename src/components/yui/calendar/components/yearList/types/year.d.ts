import { Dayjs } from 'dayjs'
import { CalendarBasic } from '../../../calendarBasic/types/calendarBasic.d'
/**
 * 天
 */
export declare namespace Year {
  //#region props
  /**
   * 属性
   */
  export interface YearProps extends Record<string, unknown> {
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
  export interface YearItem extends Record<string, unknown> {

    /**
     * 年
     */
    date: Dayjs

    /**
     * 年
     */
    year: number

    /**
     * 样式名称
     */
    className: string
  }
  //#endregion props

  export interface Events {
    /**
     * 日期选中事件
     */
    onSelectDate: CalendarBasic.SelectDateCallbackResult
  }
}

