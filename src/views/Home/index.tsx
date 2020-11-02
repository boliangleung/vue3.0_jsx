import './index.scss'
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  computed,
  watch,
  watchEffect,
  onMounted,
  onBeforeUnmount
} from 'vue'
import HelloWorld from './components/HelloWorld/index'
import ExampleModal from './components/ExampleModal/index'
import ExampleLoadingList from './components/ExampleLoadingList/index'
import { getActConfig } from '@/api'

export default defineComponent({
  name: 'page-home',
  components: {
    HelloWorld,
    ExampleModal
  },

  setup () {
    const showModal = () => {
      window.$bus.emit('show-modal-example', { text: 'some text' })
    }

    return () => (
      <div class="page-home">
        <h1>Home</h1>

        <h2>普通组件示例</h2>
        <HelloWorld></HelloWorld>

        <h2>弹窗组件示例</h2>
        <button onClick={showModal}>展示弹窗</button>
        <ExampleModal></ExampleModal>

        <h2>滚动加载示例</h2>
        <ExampleLoadingList></ExampleLoadingList>
      </div>
    )
  }
})
