/**
 * 字体背景颜色
 */
export declare namespace BackgroundColor {

  /**
   * 属性
   */
  export interface BackgroundColorProps extends Record<string, unknown> {
    /**
     * 颜色
     */
    modelValue: string

    /**
     * 图标的name -> ImgElNameAndValue.name
     */
    name: string

    /**
     * 编辑器的当前样式集合
     */
    formats: Object
  }
}

