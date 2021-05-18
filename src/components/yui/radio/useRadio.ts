import { computed, inject } from 'vue'
import { Radio } from './types/radio.d'
import { radioGroupKey } from './token'

export const useRadio = () => {
    const radioGroup = inject(radioGroupKey, {} as Radio.RadioGroupContext)
    const isGroup = computed(() => radioGroup?.name === 'y-radio-group')

    return {
        isGroup,
        radioGroup
      }
}