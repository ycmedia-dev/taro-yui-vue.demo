import { YTable, SummaryType } from "../../../types/table";

export declare namespace  YTableBody {

  /**
   * 参数
   */
   interface Props {

     slots: object

    /**
     * 表头
     */
     columnList: YTable.TableHeadItem[]

     /**
     * 表内容
     */
    data: YTable.DataType[]

    /**
     * 总计显示位置
     */
    summary?: SummaryType
  }
}
