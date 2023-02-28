import './App.css'
import { themeChange } from 'theme-change'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './containers/Layout'
import Login from './features/user/Login'

const router = createBrowserRouter([
  {
    path: '/*', // TODO: 先判斷有沒有這個chatroom的權限，沒有的話顯示 <div>你沒權限</div>
    element: <Layout />
  },
  {
    path: '/app/*',
    element: <Layout/>
  },
  {
    path: '/login',
    element: <Login/>
  }

])

function App () {
  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])
  return (
    <RouterProvider router={router} />
  )
}

export default App
