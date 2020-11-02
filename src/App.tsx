
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-view',
  setup () {
    return () => (
      <div id="app-view">
        <router-view></router-view>
      </div>
    )
  }
})
