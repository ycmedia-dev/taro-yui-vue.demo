/**
 *设置数字
 * */
export function setNumberWithZero(num: number): string {
  return num < 10 ? '0' + num : '' + num
}

/**
 * 根据时间获取年月日
 * @param date 时间
 * */
export function getYearMonthDay(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return {
    year,
    month,
    day,
    hour,
    minute
  }
}

/**
 * 默认将日期格式化为 YYYY-MM-DD
 * @param date Date类型的时间
 * @param field 时间显示粒度
 */
export function formatDate (
  date: Date,
  field: 'year' | 'month' | 'day' = 'day'
) {
  const yearStr = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthStr = padLeft(month, 2,'0');
  const day = date.getDate();
  const dayStr = padLeft(day, 2,'0');
  switch (field) {
    case 'year':
      return `${yearStr}`;
    case 'month':
      return `${yearStr}-${monthStr}`;
    case 'day':
      return `${yearStr}-${monthStr}-${dayStr}`;
  }
};

/**
 * 获取今天的日期
 * **/
export function getTodayDate() {
  const { year, month, day } = getYearMonthDay(new Date())
  return `${year}-${setNumberWithZero(month + 1)}-${setNumberWithZero(day)}`
}


/****
 * 是否在某个时间范围内
 * @param minDate 最小值
 * @param currentDate 要比较的
 * @param maxDate 最大值 ，默认今天
 */
export function isNotInRange(minDate: string, currentDate: string, maxDate: string = getTodayDate()) {
  let minTime: number = new Date(minDate).getTime()
  let maxTime: number = new Date(maxDate).getTime()
  let currentTime: number = new Date(currentDate).getTime()
  return minTime > currentTime || currentTime > maxTime
}

/****
 * 比较两个时间
 * @param minDate 最小值
 * @param currentDate 要比较的
 * @param maxDate 最大值 ，默认今天
 */
export function compareDate(fDate: string, sDate: string) {
  let fTime: number = new Date(fDate).getTime()
  let sTime: number = new Date(sDate).getTime()
  let num = fTime - sTime
  return num
}

/**
 * 数据转换为数组
 * @param n 数字
 */
export const rangeArr = (n: number) => {
  return Array.from(Array(n).keys())
}

/**
 * 左侧补位
 * @param value 值
 * @param amount 数量
 * @param padding 填充的内容
 */
export function padLeft(value: string | number, amount: number, padding: string) {
  value = `${value}`
  let difference: number = amount - value.length
  if (difference < 1) {
    return value;
  }
  let tempValueList = [value]
  for (let i = 0; i < difference; i++) {
    tempValueList.unshift(padding)
  }
  return tempValueList.join('')
}
