import { SetupContext, PropType, defineComponent, nextTick, computed, ref, Ref, watch } from "vue";
import "./radio.scss";
import selectImg from "./assets/img/select.svg";
import unSelectImg from "./assets/img/unSelect.svg";
import disabledImg from "./assets/img/disabled.svg";
import selectDisabledImg from "./assets/img/selectDisabled.svg";
import { Radio } from './types/radio.d'
import { useRadio } from './useRadio'
import { UPDATE_MODEL_EVENT } from './utils/constants'

/**
 * 单选框
 */
class YRadioService {

    /**
     * 上下文
     */
    private context: SetupContext

    /**
     * Radio 的 value
     */
    model: Ref<Radio.IModelType> = ref('')

    /**
     * 单选框值
     */
    value:Radio.IModelType = 0;

    disabled = ref(false)

    constructor(props: Radio.Props, context: SetupContext) {
        this.context = context;
        this.value = props.value
        this.disabled.value = !!props.disabled || false
        const {
            isGroup,
            radioGroup
        } = useRadio()
        if (isGroup.value && props.modelValue) {
            throw new Error(`y-radio-group 与 y-radio 同时使用时，v-model应写在y-radio-group上边`);
        }
        this.model = computed<Radio.IModelType>({
            get() {
                return isGroup.value ? radioGroup.modelValue : props.modelValue
            },
            set(val) {
                if (isGroup.value) {
                    radioGroup.changeEvent(val)
                } else {
                    context.emit(UPDATE_MODEL_EVENT, val)
                }
            },
        })
        watch(() => props.disabled, (newVal) => {
          this.disabled.value = !!newVal || false
        })
    }

    /**
     * 单选框，选中发生变化
     */
    onChange() {
      if (this.disabled.value) {
        return
      }
        this.model.value = this.value
        nextTick(() => {
            this.context.emit('change', this.value)
        })
    }
}
export default defineComponent({
    name: 'yc-radio',
    props: {
        modelValue: {
            type: [String, Number, Boolean] as PropType<Radio.IModelType>,
            default: ''
        },
        value: {
            type: [String, Number, Boolean] as PropType<Radio.IModelType>,
            default: ''
        },

        disabled: {
          type: Boolean as PropType<boolean>,
          default: false
        }
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props: Radio.Props, context: SetupContext) {
        const service = new YRadioService(props, context);
        return {
            selectImg,
            unSelectImg,
            disabledImg,
            selectDisabledImg,
            model: service.model,
            disabled: service.disabled,
            onChange: service.onChange.bind(service)
        };
    }
});
