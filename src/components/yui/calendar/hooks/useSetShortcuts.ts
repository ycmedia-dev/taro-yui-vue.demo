/**
 * 快捷键item
 */
interface ShortcutItem {
  /**
   * 快捷键名称
   */
  text: string

  /**
   * 快捷键值
   */
  value: Function
}

/**
 * 默认快捷键
 * @constructor
 */
export function UseSetShortcuts(): ShortcutItem[] {
  return [{
    text: '最近一周',
    value: (() => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    })
  },{
    text: '最近一个月',
    value: (() => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    })
  },{
    text: '最近三个月',
    value: (() => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    })
  }]
}
