import { PropType, defineComponent, ref, Ref, watch } from 'vue'
import { YSteps } from './types/steps.d'
import './steps.scss'

/**
 * 步骤组件
 */
class StepsService {

  constructor(props: YSteps.YStepsProps) {
    console.log(props)
  }

}

export default defineComponent({
  name: 'y-steps',
  props: {
    options: {
      type: Array as PropType<YSteps.StepItem[]>,
      default: false,
    },
    current: {
      type: Number as PropType<number>,
      default: false,
    },
  },
  setup(props: YSteps.YStepsProps) {
    const service = new StepsService(props)
    return {
    };
  }
});
