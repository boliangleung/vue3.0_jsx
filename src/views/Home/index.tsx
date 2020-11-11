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
  onBeforeUnmount,
  PropType
} from 'vue'
import HelloWorld from './components/HelloWorld/index'
import ExampleModal from './components/ExampleModal/index'

import ExampleLoadingList from './components/ExampleLoadingList/index'
import { getActConfig } from '@/api'

function TextFunction () {
  const readersNumber = ref(0)
  const book = reactive({ title: 'Vue 3 Guide' })
  // Please note that we need to explicitly expose ref value here
  return (
    <div>
      <div>{book.title}</div>
      <div>{readersNumber.value}</div>
    </div>)
}
function TestDecorator (target: any) {
  console.log(99)
}

function Button () {
  return <div class="btn">哈哈哈</div>
}
// @TestDecorator
// class Text {
//   public book: any
//   constructor (name: string) {
//     this.book = reactive({ title: name })
//     // this.book = this.book.bind(this)
//   }

//   getOrigin () {
//     // eslint-disable-next-line @typescript-eslint/no-this-alias
//     console.log(this)
//     return <div>852</div>
//   }

//   render () {
//     return <div>{this}</div>
//   }
// }
// const Demo2 = new Text('伯亮')
// console.log(Demo2.getOrigin(), 852)
interface CounterObj{
  number: number;
  name?: string;
  children?: string;
  slots?: object;
}
function NumberDescriber (props: CounterObj) {
  console.log(props.children, props)
  console.log(typeof props.slots)
  let description
  if (props.number % 2 === 0) {
    description = <strong>even</strong>
  } else {
    description = <i>odd</i>
  }
  return <div>{props.number} is an {description} {props.name} number   {props.slots}</div>
}
interface ItemFace{
  key: string;
  message: string;
}
function Item (props: ItemFace) {
  return <li>666{props.message}888</li>
}
function TodoList () {
  const todos = ['finish doc', 'submit pr', 'nag dan to review']
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  )
}

// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat (props: any) {
  const items = []
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children)
  }
  return <div>{items}</div>
}

function ListOfTenThings () {
  // return defineComponent({
  //   setup (props) {
  //     console.log(props, 852669)
  //     return () => <div>999998</div>
  //   }

  // })
  return (
    <Repeat numTimes={10} >
      {(index: number) => <div key={index} >This is item {index} in the list</div>}
    </Repeat>
  )
}
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
    const book = reactive({ title: 'lbl' })
    const slots = [1, 2, 30].map(item => <div>{item * 2}</div>)
    const count = reactive({ number: 852, name: 'lbl', slots })
    console.log(count)
    return () => (
      <div class="page-home">
        <h1>Home</h1>
        <h2>普通组件示例</h2>
        <HelloWorld></HelloWorld>
        <h2>弹窗组件示例</h2>
        <button onClick={showModal}>展示弹窗</button>
        <ExampleModal></ExampleModal>
        <h2>滚动加载示例</h2>
        <Button></Button>
        <NumberDescriber { ...count} ></NumberDescriber>
        <TodoList></TodoList>
        <ListOfTenThings></ListOfTenThings>
        {/* <Text.getOrigin></Text.getOrigin> */}
        <TextFunction></TextFunction>
        <ExampleLoadingList></ExampleLoadingList>
      </div>
    )
  }
})
