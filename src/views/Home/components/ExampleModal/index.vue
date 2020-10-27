<template>
  <Modal v-model="visiable" class="c-modal-example"> 弹窗示例</Modal>
</template>

<script>
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
    const state = reactive({
      visiable: false
    })

    const init = () => {
      state.visiable = true
    }

    onMounted(() => {
      window.$bus.on('show-modal-example', init)
    })
    onBeforeUnmount(() => {
      window.$bus.off('show-modal-example', init)
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
.c-modal-example {
}
</style>
