import { Dayjs } from 'dayjs'
import { CalendarBasic } from '../../../calendarBasic/types/calendarBasic.d'
/**
 * 季度
 */
export declare namespace Quarter {
  //#region props
  /**
   * 属性
   */
  export interface QuarterProps extends Record<string, unknown> {
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
   * 季度集合item
   */
  export interface QuarterItem extends Record<string, unknown> {
    /**
     * 年
     */
    date: Dayjs

    /**
     * 季度
     */
    quarter: number

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
     * 日期选中事件
     */
    onSelectDate: CalendarBasic.SelectDateCallbackResult
  }
}

