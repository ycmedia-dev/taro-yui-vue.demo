import {YForm} from '../../../types/form.d'

/**
 * 表单项-自定义选择器
 */
export declare namespace YFormItemCustomSelector {
    
    // #region props
    /**
     * 属性
     */
    export interface Props extends Record<string, unknown> {
        /***
         * 模式：可编辑edit/可查看view, 默认edit
         */
        pattern: string

        /**
         * 参数
         */
        options: YForm.YFormItemCustomSelectorOptions

        /**
         * 绑定值
         */
        modelValue: string
    }
    //#endregion props
}
