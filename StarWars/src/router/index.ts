// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/JediAppBar.vue'),
    children: [
      {
        path: '/jedi',
        name: 'Jedi',
        component: () => import('@/views/JediView.vue')
      },
      {
        path: '/films',
        name: 'Films',
        component: () => import('@/views/FilmsView.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
