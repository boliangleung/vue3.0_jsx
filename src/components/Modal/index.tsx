
import './index.scss'
import { defineComponent, withModifiers } from 'vue'
export default defineComponent({
  props: {
    modelValue: {
      type: Boolean
    }
  },
  setup (props, { emit, slots }) {
    const handleClose = () => {
      emit('update:modelValue', false)
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onTouchmove = () => {}

    return () => (
      <div class={['c-modal', { active: props.modelValue }]} onTouchmove={withModifiers(onTouchmove, ['stop', 'prevent'])}>
        <div class="c-modal-container">
          <div class="c-modal-close" onClick={handleClose}></div>
          <div class="c-modal-content">
            {slots.default?.()}
          </div>
        </div>
      </div>
    )
  }
})
