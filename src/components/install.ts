import type { App } from 'vue'

const files = require.context('@/components', true, /index\.vue$/)
const pattern = /\/(.+)\/index.vue/

export default function installComponents (app: App) {
  files.keys().forEach(key => {
    const m = key.match(pattern)
    if (m) {
      const name = m[1]
      app.component(name, files(key).default || files(key))
    }
  })
}
