/**
 * 底部固定button
 */
export declare namespace FixedButton{

    //#region props
    /**
     * 属性
     */
    interface Props{

        /**
         * 按钮显示文字列表
         */
        btnLabelList:string[]

        /**
         * 显示方向	
         */
        direction:DirectionType

        /**
         * 按钮类型
         */
        btnTypeList?:string[]
    }


    //#endregion props

    //#region events
    interface Events{

        /**
         * 点击事件
         */
        click:ClickCallbackResult
    }

    /**
     * 点击事件回调参数
     */
    export interface ClickCallbackResult{

        /**
         * 按钮下标
         */
        index:number
    }
    //#endregion events
}

//#region DirectionType
/**
 * 显示方向
 */
export enum DirectionType{

    /**
     * 垂直
     */
    VERTICAL = "vertical",

    /**
     * 水平
     */
    HORIZONTAL = "horizontal"
}
//#endregion DirectionType

//#region BtnType
/**
 * 按钮类型
 */
export enum BtnType{

  /**
   * 确定按钮
   */
  PRIMARY= "primary",

  /**
   * 取消
   */
  CANCEL = "cancel",

  /**
   * 删除
   */
  DELETE = 'delete'
}
//#endregion BtnType
