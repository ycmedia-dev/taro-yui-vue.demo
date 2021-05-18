import {Radio} from '../../radio/types/radio.d'
/**
 * 单选框组
 */
export declare namespace RadioGroup{

    //#region props
    /**
     * 属性
     */
    export interface Props {

        /**
         * 选中值
         */
        modelValue: Radio.IModelType
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
        change:Radio.IModelType
    }
    //#endregion events
}
