import { ref, Ref, computed, SetupContext, PropType, defineComponent, watch } from "vue";
import "./checkbox.scss";
import selectImg from "./assets/img/select.svg";
import unSelectImg from "./assets/img/unSelect.svg";
import disabledImg from "./assets/img/disabled.svg";
import selectDisabledImg from "./assets/img/selectDisabled.svg";
import { Checkbox } from './types/checkbox.d'
import { useCheckbox } from './useCheckbox'
import { UPDATE_MODEL_EVENT } from './utils/constants'

/**
 * 多选框
 */
class YcCheckboxService {

    /**
     * 上下文
     */
    private context: SetupContext

    /**
     * checkbox 的 value
     */
    private value: Checkbox.IModelType

    /**
     * 是否选中
     */
    isChecked: Ref<Boolean> = ref(false)

    /**
     * 是否屏蔽
     */
    disabled = ref(false)

    /**
     * checkbox 的 value
     */
    private model: Ref<Checkbox.IModelType[]> = ref([])

    constructor(props: Checkbox.Props, context: SetupContext) {
        this.context = context;
        this.value = props.value
        this.disabled.value = !!props.disabled || false
        const {
            isGroup,
            checkboxGroup
        } = useCheckbox()
        if (isGroup.value && props.modelValue) {
            throw new Error(`y-checkbox-group 与 y-checkbox 同时使用时，v-model应写在y-checkbox-group上边`);
        }
        this.model = computed<Checkbox.IModelType[]>({
            get() {
                return isGroup.value ? checkboxGroup.modelValue.value : props.modelValue||[]
            },
            set(val) {
                if (isGroup.value) {
                    checkboxGroup.changeEvent(val)
                } else {
                    context.emit(UPDATE_MODEL_EVENT, val)
                }
            },
        })

        this.isChecked = computed<boolean>(() => {
            const value = this.model.value
            if (typeof value === 'boolean') {
                return value
            } else if (Array.isArray(value)) {
                return value.includes(props.value)
            } else {
                return false;
            }
        })

        watch(() => props.disabled, (newVal) => {
          this.disabled.value = !!newVal || false
        })
    }

    /**
     * 选中状态发生变化
     */
    onChange() {
        if (this.disabled.value) {
          return
        }
        const value = this.model.value
        if (!this.isChecked.value) {
            value.push(this.value)
        } else {
            const index: number = this.model.value.indexOf(this.value);
            value.splice(index, 1)
        }
        this.model.value = value;
        this.context.emit(UPDATE_MODEL_EVENT, this.model.value)
        this.context.emit('change', this.model.value)
    }
}
export default defineComponent({
    name: 'y-checkbox',
    props: {
        type: {
          type: [String] as PropType<string>,
          default: 'checkbox'
        },
        modelValue: {
            type: Array as PropType<Checkbox.IModelType[]>
        },
        value: {
            type: [String, Number, Boolean] as PropType<Checkbox.IModelType>,
            default: ''
        },
        disabled: {
          type: Boolean as PropType<boolean>,
          default: false
        }
    },
    emits: [UPDATE_MODEL_EVENT, 'change'],
    setup(props: Checkbox.Props, context: SetupContext) {
        const checkboxService = new YcCheckboxService(props, context);
        return {
            selectImg,
            unSelectImg,
            disabledImg,
            selectDisabledImg,
            isChecked: checkboxService.isChecked,
            disabled: checkboxService.disabled,
            onChange: checkboxService.onChange.bind(checkboxService)
        };
    }
});
