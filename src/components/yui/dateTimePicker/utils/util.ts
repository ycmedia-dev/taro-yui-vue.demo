/**
 * 生成随机字符串
 * @param long 长度
 */
export function randomStr(long: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const maxPos = chars.length;
  var string = '';
  for (var i = 0; i < long; i++) {
    string += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return string;
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
 *设置数字
 * */
export function setNumberWithZero(num: number): string{
  return num < 10 ? '0' + num : '' + num
}
/** 填充0 */
export const fillWithZero = (target: number | string, length: number) => {
  return (Array(length).join('0') + target).slice(-length);
};

/**
 * 默认将日期格式化为 YYYY-MM-DD
 * @param date Date类型的时间
 * @param field 时间显示粒度
 */
export const formatDate = (
  date: Date,
  field: 'year' | 'month' | 'day' = 'day'
) => {
  const yearStr = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthStr = fillWithZero(month, 2);
  const day = date.getDate();
  const dayStr = fillWithZero(day, 2);
  switch (field) {
    case 'year':
      return `${yearStr}`;
    case 'month':
      return `${yearStr}-${monthStr}`;
    case 'day':
      return `${yearStr}-${monthStr}-${dayStr}`;
  }
};