import './weekDayList.scss'
import { PropType, defineComponent, Ref, ref } from 'vue'

class WeekDayListService{

  weekTextList: Ref<string[]> = ref(['日', '一', '二', '三', '四', '五', '六'])

  constructor() {
  }
}

export default defineComponent({
  props: {
  },
  setup() {
    const service = new WeekDayListService()

    return {
      weekTextList: service.weekTextList,
    }
  }
})
