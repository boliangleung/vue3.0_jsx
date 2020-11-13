/* eslint-disable vue/custom-event-name-casing */
import './index.scss'
import { defineComponent, PropType } from 'vue'
type AvatarSizeType = 'mini' | 'medium' |'customize'
interface DefaultProps{
  src?: string;
  type?: AvatarSizeType;
}

export default defineComponent({
  props: {
    src: String,
    onClick2: Function,
    sizeType: {
      type: String as PropType<AvatarSizeType>,
      default: 'medium'
    }
  },
  emits: ['click2'],
  setup (props, { emit }) {
    const clickAvatar = () => {
      emit('click2')
    }
    const defaultImg = require('@/img/avatar-default.png')
    return () => (
      <div class={['qy-avatar', props.sizeType]} onClick={clickAvatar} >
        <img src={props.src || defaultImg} alt=""/>
      </div>
    )
  }
})
