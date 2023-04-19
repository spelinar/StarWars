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
        component: () => import('@/views/jediPeople/JediView.vue')
      },
      {
        path: '/characters/:id',
        name: 'charactersId',
        component: () => import('@/views/jediPeople/JediDetailsView.vue')
      },
      {
        path: '/films/:id',
        name: 'Films',
        component: () => import('@/views/jediFilms/FilmsView.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
