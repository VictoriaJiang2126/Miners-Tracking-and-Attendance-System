import homeRouter from './home-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login',
    component: () => import('@/view/home/home'),
    children: [...homeRouter],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/login'),
  },
  {
    redirect: '/404',
    path: '/:pathMatch(.*)',
  },
]

export default routes
