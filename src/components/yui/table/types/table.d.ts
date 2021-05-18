/**
 * 表格
 */
export declare namespace YTable {

  // #region props

  export type DataType = { [key: string]: string | number | object | Array<string | number | object> }[]

  /**
   * 属性
   */
  export interface YTableProps extends Record<string, unknown> {

    /***
     * 表头
     */
    options: TableHeadItem[]

    /**
     * 表内容
     */
    data: DataType[]

    /**
     * 总计显示位置
     */
    summary?: SummaryType
  }

  /**
   * 表头item
   */
  export interface TableHeadItem extends Record<string, unknown> {
    /**
     * 列宽度，百分数，默认等距
     * 如果设置，每列都要设置，
     */
    width?: string
    /**
     * 列名称
     */
    label: string

    /***
     * 列key
     */
    columnKey: string

    /**
     * 排序, sort(不排序) desc(降序)，asc(升序)
     */
    sort?: SortType

    /**
     * 固定位置
     */
    fixed?: FixedDirectionEnum
  }
  //#endregion props

  // #region events
  /**
   * 点击排序回调结果
   */
  export interface SortCallBackResult extends Record<string, unknown> {
    /**
     * 所在列名
     */
    columnKey: string

    /**
     * 顺序： ''(不排序) desc(降序)，asc(升序)
     */
    sort: string
  }

  /**
   * 行点击回调结果
   */
  export interface RowClickCallBackResult extends Record<string, unknown> {

    /**
     * 行下标，从0开始
     */
     index: number
  }

  /**
   * 事件
   */
  interface Event {

    /**
     * 排序事件
     */
    onSort: SortCallBackResult

    /**
     * 行点击事件
     */
    onRowClick: RowClickCallBackResult
  }
  //#endregion events
}

//#region SortType
/**
 * 排序
 */
export enum SortType {
  /**
   * 不排序
   */
  NONE = '',
  /**
   * 降序
   */
  DESC = 'desc',

  /**
   * 升序
   */
  ASC = 'asc',
}
//#endregion SortType

//#region FixedDirectionEnum
/**
 * 列固定位置
 */
export enum FixedDirectionEnum {
  /**
   * 左
   */
  LEFT = 'left',

  /**
   * 右
   */
  RIGHT = 'right',
}
//#endregion FixedDirectionEnum


//#region SummaryType
/**
 * 统计所在行
 */
export enum SummaryType {
  /**
   * 第一行
   */
  TOP = 'top',

  /**
   * 最后一行
   */
  BOTTOM = 'bottom'
}
//#endregion SummaryType
