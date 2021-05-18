/**
 * 多选框组
 */
export declare namespace CheckboxGroup{

    //#region props
    export type IModelType = boolean | string | number
    /**
     * 属性
     */
    export interface Props {
        /**
         * 选中值
         */
        modelValue: IModelType[]

        /**
         * 值
         */
        value: IModelType
    }
    //#endregion props

    //#region events
    /**
     * 事件
     */
    export interface Events {

        /**
         * 绑定值变化时触发，选中的radio value值
         */
        change: IModelType[]
    }
    //#endregion events
}
