import {CalendarTypeEnum, CalendarBasic} from "../../calendar/calendarBasic/types/calendarBasic";

/**
 * 日期选择器
 */
export declare namespace YDatePicker {

  //#region props
  /**
   * 属性
   */
  export interface Props extends Record<string, unknown> {
    /***
     * 模式：可编辑edit/可查看view, 默认edit
     */
    pattern?: string

    /**
     * 参数
     */
    options:YDatePickerOptions

    /**
     * 值，必填
     */
    modelValue: string|string[]
  }

  /**
   * datePicker参数
   */
  export interface YDatePickerOptions {
    /**
     * 日期类型, 默认'date'
     */
    type?: CalendarTypeEnum

    /**
     *  提示信息，非必填
     */
    placeholder?: string

    /**
     * 是否多选，默认：false
     */
    isMultiSelect?: boolean

    /**
     * 日期格式化点位符，默认：YYYY-MM-DD
     */
    format?:string

    /**
     * 是否可清除, 必填项， 默认true
     */
    canClear?: boolean

    /**
     * 外部定点id
     */
    maskOuterElId?: string

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
    shortcuts?: CalendarBasic.ShortcutsItem[]
  }


  //#endregion props
}
