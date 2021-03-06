import { createApp, h } from 'vue'
import mitt from 'mitt'
import { asyncLogin } from '@yy/kxd-login'
import { Toast } from '@yy/xh-components'
import { initRem, initConsole, initHiido, initRaven, initMonitor, installFilters } from '@yy/xh-tools'
import '@yy/xh-skin'
import installComponents from './components/install'
import App from './App'
import router from './router/index'
import './css/index.scss'

window.$bus = mitt()
window.$toast = Toast

const init = async function () {
  initRem()
  initHiido()
  initRaven()
  await initMonitor()
  await initConsole()
  try {
    await asyncLogin()
  } catch (e) {
    console.log('Error asyncLogin', e)
  }

  const app = createApp({
    mounted () {
      window.reportMonitor && window.reportMonitor({ function_id: 'show' })
    },
    render: () => h(App)
  })
  // 注册路由
  app.use(router)
  // 注册全局方法（vue3移除了filter，以函数的方式实现）
  app.use(installFilters)
  // 注册全局组件
  app.use(installComponents)

  app.mount('#app')
}
init()
