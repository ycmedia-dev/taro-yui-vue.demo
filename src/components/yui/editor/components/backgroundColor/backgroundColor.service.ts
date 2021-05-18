import './backgroundColor.scss'
import {PropType, SetupContext, defineComponent, Ref, ref, watch, defineAsyncComponent} from 'vue'
import { BackgroundColor } from './types/backgroundColor'
import { YEditorImgElType } from '../../types/editor.d'


class BackgroundColorService {

  /**
   * 上下文
   */
  context: SetupContext

  /**
   * 颜色值
   */
  color: Ref<string> = ref('')

  constructor(props: BackgroundColor.BackgroundColorProps, context: SetupContext) {
    this.context = context
    this.color.value = props.modelValue
  }

}

export default defineComponent({
  props: {
    modelValue:{
      type: String as PropType<string>,
      default: ''
    },
    name:{
      type: String as PropType<string>,
      default: ''
    },
    formats: {
      type: Object as PropType<object>,
      default: {}
    }
  },
  emits: ['update:modelValue', 'getName'],
  components: {
    'y-color': defineAsyncComponent(() => import('../color/color.vue'))
  },
  setup(props: BackgroundColor.BackgroundColorProps, context: SetupContext) {
    const service = new BackgroundColorService(props, context)

    watch(() => service.color.value, (newVal) => {
      service.context.emit('update:modelValue', newVal)
      service.context.emit('getName', props.name)
    })

    return {
      YEditorImgElType,
      color: service.color,
    }
  }
})
