import { Dayjs } from 'dayjs'

export declare namespace Controller {

  /**
   * 属性
   */
  export interface ControllerProps extends Record<string, unknown> {

    /**
     * 当月日期
     */
    modelValue: Dayjs
  }
}

/**
 * 日历控制按钮类型
 */
export enum CalendarControllerBtnType {

  /**
   * 上一年
   */
  PREV_YEAR = "prev_year",

  /**
   * 上个月
   */
  PREV_MONTH = "prev_month",

  /**
   * 下个月
   */
  NEXT_MONTH = "next_month",

  /**
   * 下一年
   */
  NEXT_YEAR = "next_year"
}
