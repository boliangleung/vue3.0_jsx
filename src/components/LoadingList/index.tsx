
import { defineComponent, reactive, toRefs } from 'vue'
import { List } from 'vant'

export default defineComponent({
  // components: {
  //   'van-list': List
  // },
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

  setup (props, { slots }) {
    const state = reactive({
      list: [] as object[],
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
        const list = await props.load({ page, size })
        console.log(1111, list)
        // 处理结果
        props.handleList && props.handleList(list)
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

    return () => (
      <List
        class="c-loading-list"
        v-model={[state.pageInfo.loading, 'modelValue']}
        finished={state.pageInfo.finished}
        finished-text={state.list.length ? '没有更多了' : props.emptyText}
        onLoad={getList}
      >
        {slots.default?.({ list: state.list })}
      </List>
    )
  }
})
