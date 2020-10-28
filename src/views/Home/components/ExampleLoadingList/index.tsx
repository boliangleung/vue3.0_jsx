import './index.scss'
import { defineComponent } from 'vue'
import LoadingList from '@/components/LoadingList/index.tsx'

export default defineComponent({
  setup () {
    // 模拟一个请求方法
    const load = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([{ id: 1 }, { id: 2 }, { id: 3 }])
        }, 1000)
      })
    }

    const slots = {
      default: ({ list }: {list: Array<{id: number}>}) => (
        list.map(item => (<div>{item.id}</div>))
      )
    }

    return () => (
      <LoadingList load={load} v-slots={slots}></LoadingList>
    )
  }
})
