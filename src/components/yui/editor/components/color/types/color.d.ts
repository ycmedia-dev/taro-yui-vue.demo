/**
 * 颜色
 */
export declare namespace Color {

  /**
   * 属性
   */
  export interface ColorProps extends Record<string, unknown> {
    /**
     * 颜色
     */
    modelValue: string

    /**
     * 图标名称
     */
    iconName: string

    /**
     * 选中的样式
     */
    formats: object
  }
}

