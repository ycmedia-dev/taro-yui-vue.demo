/**
 * 卡片
 */
import {CommonEvent} from "@tarojs/components";

export declare namespace Card {

    //#region props
    /**
     * 属性标签
     */
    export interface CardProperty {

        /**
         * 名称
         */
        name: string

        /**
         * 显示标签
         */
        label: string
    }

    export interface Props {

        /**
         * 绑定数据
         */
        info: Object,

        /**
         * 标题属性
         */
        titleProperty: string

        /**
         * 属性显示标签列表
         */
        bodyPropertyList: CardProperty[],

        /**
         * 操作列表
         */
        actionList: ActionTypeEnum[]

        /**
         * 自定义操作列表，默认值：[]
         */
        customActionList?: ActionInfo[]
    }

    /**
     * 操作按钮信息
     */
    export interface ActionInfo {

        /**
         * class属性
         */
        className: string

        /**
         * 显示的名称
         */
        label: string
    }
    //#endregion props

    //#region events
    export interface Events {

        /**
         * 操作按钮点击事件回调参数
         */
        action: ActionCallbackResult

        /**
         * 卡片点击事件回调参数
         */
        click: ClickCallbackResult
    }

    /**
     * card点击事件返回值
     */
    interface ClickCallbackResult {

        /**
         * 绑定数据
         */
        value: Object
    }

    /**
     * 操作按钮点击事件返回值
     */
    interface ActionCallbackResult {

        /**
         * 绑定数据
         */
        value: Object

        /**
         * 操作类型
         */
        type: ActionTypeEnum | string
    }
    //#endregion events
}

//#region ActionTypeEnum
/**
 * 操作按钮类型
 */
export enum ActionTypeEnum {
    /**
     * 删除
     */
    delete = 'action_delete',

    /**
     * 编辑
     */
    edit = 'action_edit',

    /**
     * 重命名
     */
    rename = 'action_rename',

    /**
     * 禁用
     */
    disable = "action_disable",


  /**
   * 启用
   */
  enable = "action_enable"
}
//#endregion ActionTypeEnum
