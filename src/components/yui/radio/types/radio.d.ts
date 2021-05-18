/**
 * 单选框
 */
export declare namespace Radio {

    export interface RadioGroupContext {
        name: string
        modelValue: IModelType
        changeEvent: (val: IModelType) => void
    }

    //#region props
    export type IModelType = boolean | string | number

    /**
     * 属性
     */
    export interface Props {

        /**
         * 选中值
         */
        modelValue: IModelType

        /**
         * 值
         */
        value: IModelType

        /**
         * 是否不可选，默认false
         */
        disabled?: boolean
    }
    //#endregion props

    //#region events
    /**
     * 事件
     */
    export interface Events{

        /**
         * 绑定值变化时触发，选中的radio value值
         */
        change:IModelType
    }
    //#endregion events
}
