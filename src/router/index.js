import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeViews.vue')
    }
  },
  {
    path: '/doing',
    name: 'doing',
    // component: '...' - //здесь будут находиться пути,
    // либо как в формате выше,
    // через возврат импорта, либо отдельно указывать импорт
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router