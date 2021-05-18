import {YEditorImgElType} from "../types/editor.d";

/**
 * name->value
 */
export const ImgElNameAndValue = {
  /**
   * 字体
   */
  'fontFamily': {
    name: 'fontFamily',
    value: 'Pacifico'
  },

  /**
   * 字体 - 大小
   */
  'fontSize': {
    name: 'fontSize',
    value: '24px'
  },

  /**
   * 字体 - 加粗
   */
  'bold': {
    name: 'bold',
    value: ''
  },

  /**
   * 字体 - 斜体
   */
  'italic': {
    name: 'italic',
    value: ''
  },

  /**
   * 字体 - 颜色
   */
  'color': {
    name: 'color',
    value: '#0000ff'
  },

  /**
   * 字体 - 靠右
   */
  'direction': {
    name: 'direction',
    value: 'rtl'
  },

  /**
   * 字体背景色
   */
  'backgroundColor': {
    name: 'backgroundColor',
    value: '#00ff00'
  },

  /**
   * 文字对齐 - 左对齐
   */
  'align-left': {
    name: 'align',
    value: 'left'
  },

  /**
   * 文字对齐 - 右对齐
   */
  'align-right': {
    name: 'align',
    value: 'right'
  },

  /**
   * 文字对齐 - 居中对齐
   */
  'align-center': {
    name: 'align',
    value: 'center'
  },

  /**
   * 文字对齐 - 左右对齐
   */
  'align-justify': {
    name: 'align',
    value: 'justify'
  },

  /**
   * 字体 - h1
   */
  'header-1': {
    name: 'header',
    value: 1
  },

  /**
   * 字体 - h2
   */
  'header-2': {
    name: 'header',
    value: 2
  },

  /**
   * 字体 - h3
   */
  'header-3': {
    name: 'header',
    value: 3
  },

  /**
   * 字体 - h4
   */
  'header-4': {
    name: 'header',
    value: 4
  },

  /**
   * 缩进 - 右
   */
  'indent': {
    name: 'indent',
    value: '+1'
  },

  /**
   * 缩进 - 左
   */
  'outdent': {
    name: 'indent',
    value: '-1'
  },

  /**
   * 字体 - 间距
   */
  'letterSpacing': {
    name: 'letterSpacing',
    value: '2em'
  },

  /**
   * 字体 - 行距
   */
  'lineHeight': {
    name: 'lineHeight',
    value: '2'
  },

  /**
   * 字体 - 下标
   */
  'script-sub': {
    name: 'script',
    value: 'sub'
  },

  /**
   * 字体 - 上标
   */
  'script-super': {
    name: 'script',
    value: 'super'
  },

  /**
   * 字体 - 删除线
   */
  'strike': {
    name: 'strike',
    value: ''
  },

  /**
   * 字体 - 下划线
   */
  'underline': {
    name: 'underline',
    value: ''
  },

  /**
   * 列表 - 有序
   */
  'list-ordered': {
    name: 'list',
    value: 'ordered'
  },

  /**
   * 列表 - 无序
   */
  'list-bullet': {
    name: 'list',
    value: 'bullet'
  },

  /**
   * 列表
   */
  'list-check': {
    name: 'list',
    value: 'unchecked'
  },

  /**
   * 间距 - 下
   */
  'marginBottom': {
    name: 'marginBottom',
    value: '20px'
  },

  /**
   * 间距 - 上
   */
  'marginTop': {
    name: 'marginTop',
    value: '20px'
  },

  /**
   * 日期
   */
  'date': {
    name: 'click',
    value: 'date'
  },

  /**
   * 分割线
   */
  'insertDivider': {
    name: 'click',
    value: 'insertDivider'
  },

  /**
   * 图片
   */
  'insertImage': {
    name: 'click',
    value: 'insertImage'
  },

  /**
   * 前进
   */
  'redo': {
    name: 'click',
    value: 'redo'
  },

  /**
   * 后退
   */
  'undo': {
    name: 'click',
    value: 'undo'
  },

  /**
   * 清除样式
   */
  'removeFormat': {
    name: 'click',
    value: 'removeFormat'
  },

  /**
   * 清除内容
   */
  'clear': {
    name: 'click',
    value: 'clear'
  },

  /**
   * 全屏
   */
  'fullScreen': {
    name: 'click',
    value: 'fullScreen'
  },
}

/**
 * 具有相同format的named的图片列表
 */
export const SameFormatNameImgList = [
  YEditorImgElType.ALIGN_LEFT,
  YEditorImgElType.ALIGN_CENTER,
  YEditorImgElType.ALIGN_RIGHT,
  YEditorImgElType.ALIGN_JUSTIFY,
  YEditorImgElType.HEADER_1,
  YEditorImgElType.HEADER_2,
  YEditorImgElType.HEADER_3,
  YEditorImgElType.HEADER_4,
  YEditorImgElType.SCRIPT_SUB,
  YEditorImgElType.SCRIPT_SUPER,
  YEditorImgElType.LIST_ORDERED,
  YEditorImgElType.LIST_BULLET,
  YEditorImgElType.LIST_CHECK,
]
