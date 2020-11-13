import { defineComponent, withModifiers } from 'vue'
import Avatar from '@/components/Avatar/index'
// interface A {
//   a: string;
//   b: string;
//   c: string;
// }
function test () {
  return {
    a: '1',
    b: '1',
    c: '1'
  }
}

// const a = test()

const b: ReturnType<typeof test> = {
  a: '1',
  b: '1',
  c: '22'
}
export default defineComponent({
  components: {
    Avatar
  },

  setup (props, context) {
    console.log(context)
    const test = () => {
      console.log(999)
    }
    console.log(Avatar)
    return () => (
      <div>
        <div class="title">头像框</div>
        <Avatar onClick2={test}></Avatar>
        {/* <Test onClick={test}></Test> */}
      </div>
    )
  }
})
