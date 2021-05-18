import { PropType, defineComponent,  SetupContext } from "vue"
import { TaroEvent } from '@tarojs/components/types/event'
import "./inputBox.scss"
import IconDelete from "../../img/icon-delete.svg"
import { YInputBox } from './types/inputBox.d'

/**
 * 筛选选项组件
 */
class InputBoxService {
  /**
   * 上下文
   */
  context: SetupContext
  /**
   * 父组件传的属性
   */
  props: YInputBox.Props;

  constructor(props: YInputBox.Props, context: SetupContext) {
    this.props = props;
    this.context = context
  }

  /**
   * 监控输入值选择变化
   * @param e
   */
  onChange(e: TaroEvent<HTMLInputElement>) {
    this.context.emit('update:modelValue', e.detail.value)
  }

  /**
   * 清空
   */
  onClear() {
    this.context.emit('update:modelValue', '')
  }
}

export default defineComponent({
  name: "y-input-box",
  emits: ['update:modelValue'],
  props: {
    options: {
      type: Object as PropType<YInputBox.InputInfo>,
      default: {

      }
    },
    modelValue:{
      type:String as PropType<string>,
      default:''
    }
  },
  setup(props: YInputBox.Props, context: SetupContext) {
    const service = new InputBoxService(props, context);
    return {
      IconDelete,
      onChange: service.onChange.bind(service),
      onClear: service.onClear.bind(service)
    };
  }
});
