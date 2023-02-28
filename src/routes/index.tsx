// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(async () => await import('../pages/protected/Dashboard'))
const Welcome = lazy(async () => await import('../pages/protected/Welcome'))
const Page404 = lazy(async () => await import('../pages/protected/404'))
const Blank = lazy(async () => await import('../pages/protected/Blank'))
const Charts = lazy(async () => await import('../pages/protected/Charts'))
const ProfileSettings = lazy(async () => await import('../pages/protected/ProfileSettings'))
const Login = lazy(async () => await import('../pages/Login'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome // view rendered
  },
  {
    path: '/settings-profile',
    component: ProfileSettings
  },
  {
    path: '/charts',
    component: Charts
  },
  {
    path: '/404',
    component: Page404
  },
  {
    path: '/blank',
    component: Blank
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes
