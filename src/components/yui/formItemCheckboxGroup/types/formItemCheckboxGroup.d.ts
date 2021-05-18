import { YForm } from '../../form/types/form.d'
import { Checkbox } from '../../checkbox/types/checkbox.d'

/**
 * 表单项-多选框组
 */
export declare namespace YFormItemCheckboxGroup {

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
        options: YForm.FormItemCheckboxGroupOptions[]

        /**
         * 绑定值
         */
        modelValue: Checkbox.IModelType[]
    }
    //#endregion props
}
