/**
 * 列表
 */
export declare namespace YList {

    // #region props

    /**
     *列表item
     */
    export type DataType= { [key: string]: string | number | object | Array<string | number | object> }[]


  /**
     * 属性
     */
    export interface YListProps extends Record<string, unknown> {

      data: DataType[]
    }
    //#endregion props
}
