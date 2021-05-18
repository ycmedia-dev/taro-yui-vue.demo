import dayjs, { Dayjs } from 'dayjs'

interface Result {
  /**
   * 开始
   */
  startDate: Dayjs | undefined

  /**
   * 结束
   */
  endDate: Dayjs | undefined
}

/**
 * 设置年范围
 * @param date 选中的范围
 * @constructor
 */
export function UseGetDateRange(startDate: Dayjs | undefined, endDate: Dayjs | undefined, item): Result {
  const { date } = item
  let start: Dayjs | undefined = undefined
  let end: Dayjs | undefined = undefined
  if (!startDate && !endDate) {
    start = date
    end = endDate
  }
  if (startDate && endDate) {
    start = date
    end = undefined
  }
  if (startDate && !endDate) {
    if (startDate.unix() <= date.unix()) {
      start = startDate
      end = date
    } else {
      start = date
      end = startDate
    }
  }
  return {
    startDate: start,
    endDate: end
  }
}
