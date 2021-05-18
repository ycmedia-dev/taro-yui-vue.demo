/**
 * 图像
 */
export declare namespace YPageContainer {
    // #region events
    /**
     * 事件
     */
    type Events = {
        /**
         * 上拉触底事件
         */
        onScrollToLower: () => void
    }
    //#endregion events

    export interface Context {

        /**
         * 是否包含搜索
         */
        hasSearchBar: boolean

        /**
         * 是否包含底部按钮
         */
        hasFixedButton: boolean

        /**
         * 纵向滚动条位置
         */
        scrollTop:number
    }
}
