
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

export default defineComponent({
  setup () {
    return () => (
      <div class="page-other">Other</div>
    )
  }
})
