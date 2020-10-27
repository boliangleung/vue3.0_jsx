<template>
  <van-list
    class="c-loading-list"
    v-model="pageInfo.loading"
    :finished="pageInfo.finished"
    :finished-text="list.length ? '没有更多了' : emptyText"
    @load="getList"
  >
    <slot :list="list"></slot>
  </van-list>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { List } from 'vant'

export default defineComponent({
  components: {
    'van-list': List
  },
  props: {
    load: {
      type: Function,
      required: true
    },
    handleList: {
      type: Function
    },
    emptyText: {
      type: String,
      default: '暂无记录'
    }
  },

  setup () {
    const state = reactive({
      list: [],
      pageInfo: {
        page: 0,
        size: 20,
        loading: false,
        finished: false
      }
    })

    const getList = async () => {
      state.pageInfo.loading = true
      const { page, size } = state.pageInfo
      try {
        const list = await state.load({ page, size })
        // 处理结果
        state.handleList && state.handleList(list)
        // console.log(list)
        state.list = [...state.list, ...list]
        if (list.length < size) {
          state.pageInfo.finished = true
        } else {
          state.pageInfo.page++
        }
      } catch (error) {
        console.log(error)
        state.pageInfo.finished = true
      }
      state.pageInfo.loading = false
    }

    return {
      ...toRefs(state),
      getList
    }
  }
})
</script>

<style lang="scss" scoped>
.c-loading-list {
}
</style>
