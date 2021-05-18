import type { InjectionKey } from 'vue'
import {Radio} from './types/radio.d'

const radioGroupKey: InjectionKey<Radio.RadioGroupContext> = 'RadioGroup' as any

export {
    radioGroupKey
}