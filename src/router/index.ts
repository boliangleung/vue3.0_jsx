import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.tsx'
import Other from '@/views/Other/index.tsx'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: 'Home', path: '/', component: Home },
    { name: 'Other', path: '/other', component: Other }
  ]
})
