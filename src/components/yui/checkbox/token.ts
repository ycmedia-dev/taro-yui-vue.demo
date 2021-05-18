import type { InjectionKey } from 'vue'
import {Checkbox} from './types/checkbox.d'

const checkboxGroupKey: InjectionKey<Checkbox.CheckboxGroupContext> = 'CheckboxGroup' as any

export {
    checkboxGroupKey
}