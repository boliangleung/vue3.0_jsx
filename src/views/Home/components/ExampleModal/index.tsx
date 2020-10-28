import './index.scss'
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  computed,
  toRefs,
  watch,
  watchEffect
} from 'vue'
import Modal from '@/components/Modal/index'

export interface Message {
  text: string;
}

export default defineComponent({
  setup () {
    const state = reactive({
      visiable: false,
      text: ''
    })

    const init = <T extends Message>({ text }: T) => {
      state.visiable = true
      state.text = text
    }

    onMounted(() => {
      window.$bus.on('show-modal-example', init)
    })
    onBeforeUnmount(() => {
      window.$bus.off('show-modal-example', init)
    })

    return () => (
      <Modal
        v-model={[state.visiable, 'modelValue']}
        class="c-modal-example"
      >
        弹窗示例--{state.text}
      </Modal>
    )
  }
})
