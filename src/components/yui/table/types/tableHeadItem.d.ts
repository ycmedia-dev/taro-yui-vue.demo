import { YTable } from './table.d'

export interface PageTableHeadItem extends YTable.TableHeadItem{
  /**
   * 排序, 0空(不排序) 1desc(降序)，2asc(升序)
   */
  sortNum?: number
}
