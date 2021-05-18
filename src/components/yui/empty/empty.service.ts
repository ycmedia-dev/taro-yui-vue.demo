import { PropType, defineComponent, ref, Ref, watch } from 'vue'
import EmptyImg from './assets/img/empty.png'
import { YEmpty } from './types/empty.d'
import './empty.scss'

/**
 * 图像组件
 */
class EmptyService {

  constructor(props: YEmpty.YEmptyProps) {

  }

}

export default defineComponent({
  name: 'y-empty',
  props: {
    tip: {
      type: String as PropType<string>,
      default: '',
    }
  },
  setup(props: YEmpty.YEmptyProps) {
    const service = new EmptyService(props)
    return {
      EmptyImg
    };
  }
});
