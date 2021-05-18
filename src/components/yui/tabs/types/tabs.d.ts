/**
 * 切换
 */
export declare namespace YTabs {
    
    // #region props
    /**
     * 属性
     */
    export interface YTabsProps extends Record<string, unknown> {
      /**
       * 组件信息
       */
      options: TabItem[]
    }

    export interface TabItem extends Record<string, unknown> {
      /***
       * id
       */
      id: number
      /**
       * 文字
       */
      label: string,

      /**
       * 数量参数
       */
      badge?: {
        /**
         * 显示值
         */
        value: number

        /**
         * 最大值
         */
        max: number
      }
    }
    //#endregion props

    // #region events
    interface Events {
      /**
       * 点击tab时触发
       */
      onClick: number
    }
  //#endregion events
}
