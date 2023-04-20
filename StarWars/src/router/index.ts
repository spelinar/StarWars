// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/JediAppBar.vue'),
    children: [
      {
        path: '/',
        name: 'characters',
        component: () => import('@/views/CharactersView/CharactersView.vue')
      },
      {
        path: '/characters/:id',
        name: 'character',
        component: () => import('@/views/CharactersView/CharactersDetails.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
