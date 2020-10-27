<template>
  <div class="page-home">
    <h1>Home</h1>

    <!-- 普通业务组件 -->
    <HelloWorld></HelloWorld>

    <button @click="showModal()">展示弹窗</button>
    <!-- 弹窗组件 -->
    <ExampleModal></ExampleModal>
  </div>
</template>

<script>
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
import HelloWorld from './components/HelloWorld/index.vue'
import ExampleModal from './components/ExampleModal/index.vue'
import { getActConfig } from '@/api'

export default defineComponent({
  components: {
    HelloWorld,
    ExampleModal
  },

  setup () {
    const showModal = () => {
      window.$bus.emit('show-modal-example')
    }
    return {
      showModal
    }
  }
})
</script>

<style lang="scss">
.page-home {
}
</style>
