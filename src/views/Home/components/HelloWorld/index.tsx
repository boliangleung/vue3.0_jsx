
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
  name: 'hello-world',
  setup () {
    return () => (<div class="c-hello-world">普通组件示例: Hello World</div>)
  }
})
