import {YForm} from '../../../types/form.d'
import {Radio} from '@/components/radio/types/radio'

/**
 * 表单项-单选框组
 */
export declare namespace YFormItemRadioGroup {
    
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
        options: YForm.FormItemRadioGroupOptions[]

        /**
         * 绑定值
         */
        modelValue: Radio.IModelType
    }
    //#endregion props
}
