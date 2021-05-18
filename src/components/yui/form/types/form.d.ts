import { YTextarea } from '../../textarea/types/textarea.d'
import { YCheckboxType } from '../../checkbox/types/checkbox.d'
import { CalendarBasic } from '../../calendar/calendarBasic/types/calendarBasic.d'
import { YUpload } from '../../upload/types/upload.d'
import { YFormItemPicker } from '../../formItemPicker/types/formItemPicker.d'
import { YDateTimePicker } from '../../dateTimePicker/types/dateTimePicker.d'
import { YFormItemText } from '../components/formItemText/types/formItemText.d'

/**
 * 表单
 */
export declare namespace YForm {

  // #region props
  /**
   * 表单项
   */
  export interface FormItem {

    /**
     * 是否必须
     */
    require: boolean

    /**
     * 是否显示
     */
    show: boolean

    /**
     * 单表行名称
     */
    label: string

    /**
     * 类型
     */
    type: YFormElType

    /**
     * 绑定的字段
     */
    property: string

    /**
     * 浏览模式，绑定的字段
     * */
    viewModeProperty?: string

    /**
     * 参数
     */
    options?: FormItemInputOptions | YFormItemText.FormItemTextOptions | FormItemRadioGroupOptions[] | YTextarea.TextAreaOptions | YFormItemCustomSelectorOptions
      | CalendarBasic.CalendarOptions | YDateTimePicker.timePickerOptions | YUpload.YUploadOptions | FormItemCheckboxGroupOptions | YFormItemPicker.FormItemPickerInfo
  }

  /**
   * 文本框参数
   */
  export interface FormItemInputOptions {

    /**
     * 提示信息
     */
    placeholder: string

    /**
     * input 类型，数字：INPUT_NUMBER 手机号：INPUT_PHONE
     */
    type?: string

    /***
     * 是否能输入
     */
    disabled?: boolean
  }



  /**
   * 自定义选择器参数
   */
  export interface YFormItemCustomSelectorOptions {

    /**
     * 提示信息
     */
    placeholder: string


    /**
     * 是否能输入
     */
    disabled?: boolean

    /**
     * 是否可清除，默认true
     */
    canClear?: boolean
  }

  /**
   * 单选框组参数
   */
  export interface FormItemRadioGroupOptions {

    /**
     * 显示标签
     */
    label: string

    /**
     * 值
     */
    value: boolean | string | number
  }

  /**
   * 多选框组参数
   */
  export interface FormItemCheckboxGroupOptions {

    /**
     * 显示标签
     */
    label: string

    /**
     * 值
     */
    value: boolean | string | number

    /**
     * 类型：checkbox/button， 默认checkbox
     */
    type?: YCheckboxType
  }

  /**
   * 选择器选项列表项
   */
  export interface FormItemPickerOption {
    /**
     * 显示标签
     */
    label: string;

    /**
     * 选项值
     */
    id: number | string;
  }

  /**
   * 属性
   */
  export interface Props extends Record<string, unknown> {
    /**
     * 表单类型：编辑(edit)或查看(view), 默认edit
     */
    pattern?: string

    /**
     * 表单行列表
     */
    rowList: FormItem[]

    /**
     * 绑定数据
     */
    modelValue: Object
  }
  //#endregion props

  //#region formEvents
  /**
   * 表单事件
   */
  interface Events {

    /**
     * 点击回调事件YFormElType.CUSTOM_SELECTOR使用
     */
    click: ClickCallbackResult
  }

  /**
   * 点击回调事件YFormElType.CUSTOM_SELECTOR使用
   */
  export interface ClickCallbackResult {

    /**
     * 行下标
     */
    index: number
  }
  //#endregion formEvents
}

//#region YFormElType
/**
 * 表单模式
 */
export enum YFormPattern {
  /**
   * 编辑
   */
  EDIT = 'edit',

  /**
   * 查看
   */
  VIEW = 'view',
}

/**
 * 元素类型
 */
export enum YFormElType {

  /**
   * 文本
   */
  INPUT = "y-form-item-input",

  /**
   * 文本
   */
  TEXT = "y-form-item-text",

  /**
   * 单选框组
   */
  RADIO_GROUP = "y-form-item-radio-group",

  /**
   * 多行文本框
   */
  TEXTAREA = "y-textarea",

  /**
   * 自定义选择器
   */
  CUSTOM_SELECTOR = "y-form-item-custom-selector",

  /**
   * 选择器
   */
  SELECTOR = 'y-form-item-picker',

  /**
   * 日期选择器
   */
  DATE_PICKER = "y-date-picker",

  /**
   * 日期时间选择器
   */
  DATE_TIME_PICKER = "y-date-time-picker",

  /**
   * 图片上传
   */
  UPLOAD = "y-upload",

  /**
   * 多选框组
   */
  CHECKBOX_GROUP = "y-form-item-checkbox-group",

  /**
   * 插槽
   */
  SLOT = "y-form-item-slot",

  /**
   * 编辑器
   */
  EDITOR = "y-editor",
}
//#endregion YFormElType
