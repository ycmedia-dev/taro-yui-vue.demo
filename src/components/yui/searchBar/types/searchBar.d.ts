import { YInputBox } from '../components/inputBox/types/inputBox.d'
import { YCustomSelector } from '../components/customSelector/types/customSelector.d'
import { YFormItemPicker } from '../../formItemPicker/types/formItemPicker.d'
import { CalendarBasic } from '../../calendar/calendarBasic/types/calendarBasic.d'
import { YDateTimePicker } from '../../dateTimePicker/types/dateTimePicker.d'
import { YForm } from '../../form/types/form.d'

/**
 * 搜索栏
 * */
export declare namespace YSearchBar{
// #region props
  /**
   * 属性
   */
  export interface Props extends Record<string, unknown> {
    /**
     * 类型：white，默认蓝色
     */
    type?: string


    /**
     * 表单行列表
     */
    rowList: SearchRowItem[]

    /**
     * 绑定数据
     */
    modelValue: Object
  }

  /**
   * 搜索项
   */
  export interface SearchRowItem {

    /**
     * 是否显示
     */
    show: boolean

    /**
     * 行左侧名称
     */
    label: string

    /**
     * 行右侧组件类型
     */
    type: SearchBarElType

    /**
     * 绑定的字段, 与modelValue关联
     */
    property: string

    /**
     * 参数
     */
    options?: YInputBox.InputInfo | YCustomSelector.CustomSelectorInfo | YFormItemPicker.FormItemPickerInfo 
    | CalendarBasic.CalendarOptions | YDateTimePicker.timePickerOptions | YForm.FormItemCheckboxGroupOptions | YForm.FormItemRadioGroupOptions[]
  }
//#endregion props

  //#region events
  interface Events{

    /**
     * 点击自定义下拉框触发
     */
    onClick: number
  }
  //#endregion events



}

// #region YFormElType
/**
 * 元素类型
 */
export enum SearchBarElType {

  /**
   * 文本
   */
  INPUT = "y-input-box",

  /**
   * 日期选择器
   */
  DATE_PICKER = "y-date-picker",

  /**
   * 日期时间选择器
   */
  DATE_TIME_PICKER = "y-date-time-picker",

  /**
   * 自定义选择器
   */
  CUSTOM_SELECTOR = "y-custom-selector",

  /**
   * 选择器
   */
  SELECTOR = 'y-form-item-picker',



  /**
   * 日期：范围
   */
  MULTIPLE_DATE = 'y-date-multiple-selector',


  /**
   * 单选框组
   */
  RADIO_GROUP = "y-form-item-radio-group",

  /**
   * 多选框组
   */
  CHECKBOX_GROUP = "y-form-item-checkbox-group"

}
//#endregion YFormElType


