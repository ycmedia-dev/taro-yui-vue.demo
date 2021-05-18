/**
 * 编辑器
 */
export declare namespace YEditor {

  // #region props
  /**
   * 属性
   */
  export interface YEditorProps extends Record<string, unknown> {
    /**
     * 值
     */
    modelValue: string

    /**
     * 组件信息
     */
    options: EditorOptions
  }

  export interface EditorOptions extends Record<string, unknown> {
    /**
     * placeholder
     */
    placeholder: string

    /**
     * 编辑器功能配置
     * */
    toolList: string[]

    /**
     * 是否仅读， 默认false
     */
    readOnly: boolean
  }
  //#endregion props

  // #region events
  interface Events {
    /**
     * 失去焦点触发
     */
    change: string
  }
  //#endregion events
}

//#region YEditorImgElType
/**
 * 图标名称
 */
export enum YEditorImgElType {

  /**
   * 字体 - 大小
   */
  FONT_SIZE = 'fontSize',

  /**
   * 字体 - 加粗
   */
  BOLD = 'bold',

  /**
   * 字体 - 斜体
   */
  ITALIC = 'italic',

  /**
   * 字体 - 颜色
   */
  COLOR = 'color',

  /**
   * 字体 - 靠右
   */
  DIRECTION = 'direction',

  /**
   * 字体背景色
   */
  BACKGROUND_COLOR = 'backgroundColor',

  /**
   * 文字对齐 - 左对齐
   */
  ALIGN_LEFT = 'align-left',

  /**
   * 文字对齐 - 右对齐
   */
  ALIGN_RIGHT = 'align-right',

  /**
   * 文字对齐 - 居中对齐
   */
  ALIGN_CENTER = 'align-center',

  /**
   * 文字对齐 - 左右对齐
   */
  ALIGN_JUSTIFY = 'align-justify',

  /**
   * 字体 - h1
   */
  HEADER_1 = 'header-1',

  /**
   * 字体 - h2
   */
  HEADER_2 = 'header-2',

  /**
   * 字体 - h3
   */
  HEADER_3 = 'header-3',

  /**
   * 字体 - h4
   */
  HEADER_4 = 'header-4',

  /**
   * 缩进 - 右
   */
  INDENT = 'indent',

  /**
   * 缩进 - 左
   */
  OUTDENT = 'outdent',

  /**
   * 字体 - 间距
   */
  LETTER_SPACING = 'letterSpacing',

  /**
   * 字体 - 行距
   */
  LINE_HEIGHT = 'lineHeight',

  /**
   * 字体 - 下标
   */
  SCRIPT_SUB = 'script-sub',

  /**
   * 字体 - 上标
   */
  SCRIPT_SUPER = 'script-super',

  /**
   * 字体 - 删除线
   */
  STRIKE = 'strike',

  /**
   * 字体 - 下划线
   */
  UNDER_LINE = 'underline',

  /**
   * 列表 - 有序
   */
  LIST_ORDERED = 'list-ordered',

  /**
   * 列表 - 无序
   */
  LIST_BULLET = 'list-bullet',

  /**
   * 列表
   */
  LIST_CHECK = 'list-check',

  /**
   * 间距 - 下
   */
  MARGIN_BOTTOM = 'marginBottom',

  /**
   * 间距 - 上
   */
  MARGIN_TOP = 'marginTop',

  /**
   * 日期
   */
  DATE = 'date',

  /**
   * 分割线
   */
  INSERT_DIVIDER = 'insertDivider',

  /**
   * 图片
   */
  INSERT_IMAGE = 'insertImage',

  /**
   * 前进
   */
  RE_DO = 'redo',

  /**
   * 后退
   */
  UN_DO = 'undo',

  /**
   * 清除样式
   */
  REMOVE_FORMAT = 'removeFormat',

  /**
   * 清除内容
   */
  CLEAR = 'clear',

  /**
   * 全屏
   */
  FULL_SCREEN = 'fullScreen',
}
//#endregion YEditorImgElType

/**
 * 图标名称->组件名称
 */
export enum YEditorComponentName {
  /**
   * 字体 - 颜色
   */
  color = 'y-font-color',

  /**
   * 字体背景色
   */
  backgroundColor = 'y-background-color',
}
