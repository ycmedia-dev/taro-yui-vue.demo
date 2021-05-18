<template>
  <view v-reSize id="container" class="container">
    <y-editor v-model="editorHtml" :options="options"></y-editor>

    <view>
      <view>内容:</view>
      <rich-text :nodes="editorHtml"></rich-text>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, defineComponent, defineAsyncComponent } from 'vue'
import './editor.scss'
import { YEditor, YEditorImgElType } from '@/components/yui/editor/types/editor.d'


class Editor {


  /**
   * 编辑器内容渲染
   * */
  editorHtml = ref('')

  /**
   * 组件配置
   */
  options: YEditor.EditorOptions = {
    placeholder: '介绍一下你的详情吧，支持文字和图片...',
    /**
     * 编辑器功能配置
     * */
    toolList: [
      YEditorImgElType.FONT_SIZE,
      YEditorImgElType.COLOR,
      YEditorImgElType.BOLD,
      YEditorImgElType.ITALIC,
      YEditorImgElType.DIRECTION,
      YEditorImgElType.BACKGROUND_COLOR,
      YEditorImgElType.ALIGN_LEFT,
      YEditorImgElType.ALIGN_RIGHT,
      YEditorImgElType.ALIGN_CENTER,
      YEditorImgElType.ALIGN_JUSTIFY,
      YEditorImgElType.HEADER_1,
      YEditorImgElType.HEADER_2,
      YEditorImgElType.HEADER_3,
      YEditorImgElType.HEADER_4,
      YEditorImgElType.INDENT,
      YEditorImgElType.OUTDENT,
      YEditorImgElType.LETTER_SPACING,
      YEditorImgElType.LINE_HEIGHT,
      YEditorImgElType.SCRIPT_SUB,
      YEditorImgElType.SCRIPT_SUPER,
      YEditorImgElType.STRIKE,
      YEditorImgElType.UNDER_LINE,
      YEditorImgElType.LIST_ORDERED,
      YEditorImgElType.LIST_BULLET,
      YEditorImgElType.LIST_CHECK,
      YEditorImgElType.MARGIN_BOTTOM,
      YEditorImgElType.MARGIN_TOP,
      YEditorImgElType.DATE,
      YEditorImgElType.INSERT_DIVIDER,
      YEditorImgElType.INSERT_IMAGE,
      YEditorImgElType.RE_DO,
      YEditorImgElType.UN_DO,
      YEditorImgElType.REMOVE_FORMAT,
      YEditorImgElType.CLEAR,
    ],

    /**
     * 是否仅读
     * */
    readOnly: false
  }
}



export default defineComponent({
  components: {
    'y-editor': defineAsyncComponent(() => import('@/components/yui/editor/editor.vue'))
  },
  setup() {
    const service = new Editor()
    return {
      options: service.options,
      editorHtml: service.editorHtml,
    };
  }
});
</script>
