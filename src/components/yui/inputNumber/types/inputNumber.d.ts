/**
 * 计数器
 */
export declare namespace YInputNumber {
    
    // #region props
    /**
     * 属性
     */
    export interface YInputNumberProps extends Record<string, unknown> {
      /**
       * 数目，值
       */
      modelValue: number

      /***
       * 组件参数
       */
      options: InputNumberInfo
    }

    export interface InputNumberInfo extends Record<string, unknown> {
      /***
       * 是否可编辑,false:可编辑， true: 不可编辑，默认false
       */
      disabled?: boolean

      /**
       * 最大: 默认9999
       */
      maxCount: number

      /**
       * 最小： 默认1
       */
      minCount: number
    }
  //#endregion props

    //#region events
    export interface Events{

      /**
       * 点击+/-触发
       */
      onChange: number
    }
    //#endregion events
}
