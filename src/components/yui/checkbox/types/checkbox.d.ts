import { ComputedRef } from 'vue'
/**
 * 多选框
 */
export declare namespace Checkbox {

    //#region props
    export type IModelType = boolean | string | number
    /**
     * 属性
     */
    export interface Props {
      /**
       * 类型：checkbox/button， 默认checkbox
       */
        type?: YCheckboxType
        /**
         * 选中值
         */
        modelValue?: IModelType[]

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

    /**
     * 多选框组上下文
     */
    export interface CheckboxGroupContext {
        name: string
        modelValue: ComputedRef<IModelType[]>
        changeEvent: (val: IModelType[]) => void
    }

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

//#region YCheckboxType
/**
 * 多选框类型
 */
export enum YCheckboxType{
    checkbox="checkbox",
    button = "button"
}
//#endregion YCheckboxType
