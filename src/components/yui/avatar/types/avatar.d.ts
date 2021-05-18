/**
 * 图像
 */
export declare namespace YAvatar {
    
    // #region props
    /**
     * 属性
     */
    export interface YAvatarProps extends Record<string, unknown> {

        /**
         * 图像尺寸
         */
        size: number

        /**
         * 是否是圆角
         */
        isCircle: boolean

        /**
         * 图像地址
         */
        src: string
    }
    //#endregion props
}
