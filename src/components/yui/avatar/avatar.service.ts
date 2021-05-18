import { PropType, defineComponent, ref, Ref, watch } from 'vue'
import { YAvatar } from './types/avatar.d'
import './avatar.scss'

/**
 * 图像组件
 */
class AvatarService {

  /**
   * 默认图片地址
   */
  private defaultAvatarUrl = 'https://res.xsrkj.cn/img/default-family-member.png';

  /**
   * 图像地址
   */
  imgSrc: Ref<string> = ref('')

  constructor(props: YAvatar.YAvatarProps) {
    this.imgSrc.value = props.src || this.defaultAvatarUrl

    watch(() => props.src, (value) => {
      if (value !== this.imgSrc.value) {
        this.imgSrc.value = value || this.defaultAvatarUrl
      }
    })
  }

  // 图片加载失败
  onErrorHaddle() {
    this.imgSrc.value = this.defaultAvatarUrl
  }
}

export default defineComponent({
  name: 'y-avatar',
  props: {
    size: {
      type: Number as PropType<number>,
      default: 120,
      validator(this: never, val: unknown) {
        if (typeof val !== 'number') {
          throw new Error('size参数必须为number类型')
        }
        if (val < 1) {
          throw new Error('size不能小于1')
        }
        return true;
      }
    },
    isCircle: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    src: {
      type: String as PropType<string>,
      default: '',
    }
  },
  setup(props: YAvatar.YAvatarProps) {
    const service = new AvatarService(props)
    return {
      imgSrc: service.imgSrc,
      onErrorHaddle: service.onErrorHaddle.bind(service)
    };
  }
});