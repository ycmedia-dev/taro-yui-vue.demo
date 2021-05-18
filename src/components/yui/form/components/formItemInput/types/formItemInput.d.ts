import {YForm} from '../../../types/form.d'

/**
 * 表单项-文本框
 */
export declare namespace YFormItemInput {
    
    // #region props
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
        options: YForm.FormItemInputOptions

        /**
         * 绑定值
         */
        modelValue: string
    }
    //#endregion props
}

//#region YFormItemInputElType
/**
 * input 类型
 */
export enum YFormItemInputElType {
  /**
   * 文字
   */
  INPUT_TEXT = 'text',
  /**
   * 数字
   */
  INPUT_NUMBER = 'number',

  /**
   * 小数点
   */
  INPUT_DIGIT= 'digit',

  /**
   * 手机号
   */
  INPUT_PHONE= 'phone'
}
//#endregion YFormItemInputElType
