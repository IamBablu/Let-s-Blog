import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddPost, AllPost, EditPost, Home, Login, Post, Signup } from './components/pages'
import { AuthLayout } from './components'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication = {false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication = {false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: '/add-posts',
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication = {false}>
            {" "}
            <AllPost />
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication = {false}>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Post />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
)
