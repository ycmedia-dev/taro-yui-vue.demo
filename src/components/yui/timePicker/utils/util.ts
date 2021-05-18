/**
 *设置有顺序的数字集合
 * @param start 开始数字
 * @param end 结束数字
 * */
export function setLoopNumber(start: number, end: number): string[]{
  let startNum = start || 0
  let endNum = end || 1
  let list: string[] = []
  for (let i = startNum; i <= endNum; i++) {
    list.push(setNumberWithZero(i))
  }
  return list
}

/**
 *设置数字
 * */
export function setNumberWithZero(num: number): string{
  return num < 10 ? `0${num}` : num.toString()
}
