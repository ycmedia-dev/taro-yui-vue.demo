import { computed, inject } from 'vue'
import { Checkbox } from './types/checkbox.d'
import { checkboxGroupKey } from './token'

export const useCheckbox = () => {
    const checkboxGroup = inject(checkboxGroupKey, {} as Checkbox.CheckboxGroupContext)
    const isGroup = computed(() => checkboxGroup?.name === 'y-checkbox-group')

    return {
        isGroup,
        checkboxGroup
      }
}