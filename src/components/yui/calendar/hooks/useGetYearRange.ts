import dayjs, { Dayjs } from 'dayjs'

interface Result {
  /**
   * 开始
   */
  startDate: Dayjs

  /**
   * 结束
   */
  endDate: Dayjs
}

/**
 * 设置年范围
 * @param date 选中的年
 * @constructor
 */
export function UseGetYearRange(date: Dayjs): Result {
  const year: number = +(date.format('YYYY'))
  const differ: number = year % 10
  const startDate: Dayjs = differ ? date.subtract(differ, 'year') : date
  const endDate: Dayjs = startDate.add(9, 'year')
  return {
    startDate,
    endDate
  }
}
