import { PropType, defineComponent, ref, Ref, watch } from 'vue'
import IconArrowRight from './assets/img/icon_arrow_right.svg'
import { YList } from './types/list.d'
import './list.scss'

/**
 * 列表组件
 */
class ListService {
  /**
   * 图像地址
   */
  imgSrc: Ref<string> = ref('')

  constructor(props: YList.YListProps) {

  }

}

export default defineComponent({
  name: 'y-list',
  props: {
    data: {
      type: Array as PropType<YList.DataItem[]>,
      default: []
    }
  },
  setup(props: YList.YListProps) {
    const service = new ListService(props)
    return {
      IconArrowRight,
    };
  }
});
