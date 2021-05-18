import { InjectionKey,Ref } from 'vue'
import {YPageContainer} from './types/pageContainer.d'

const pageContainerKey: InjectionKey<Ref<YPageContainer.Context>> = Symbol()

export {
    pageContainerKey
}