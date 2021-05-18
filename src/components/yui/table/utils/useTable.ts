import { computed } from 'vue'
import { YTable, FixedDirectionEnum } from '../types/table'

/**
 * 列宽
 */
export const useColumnWidth = computed(() => {
  return (data: YTable.TableHeadItem) => {
    if (!data.width || data.width.indexOf('%') > -1) {
      return 'auto';
    }
    return data.width;
  }
})

/**
 * @description 固定列的时候计算偏移量
 * @param fixedType
 * @param index
 */
export const getFixedDistance = computed(() => {
  return (data: YTable.TableHeadItem[], fixedType: FixedDirectionEnum, index) => {
    if (fixedType === 'left') {
      return data.reduce(function (prev, cur, i) {
        if ((i + 1) <= index) {
          let width = <string>cur.width;
          width = width.substr(0, width.indexOf('px'));
          return prev + parseInt(width)-2;
        } else {
          return prev;
        }
      }, 0);
    }
    return data.reduceRight(function (prev, cur, i) {
      if ((i - 1) >= index) {
        let width = <string>cur.width;
        width = width.substr(0, width.indexOf('px'));
        return prev + parseInt(width);
      } else {
        return prev;
      }
    }, 0);
  }
})
