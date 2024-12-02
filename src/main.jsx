import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AddPost, AllPost, EditPost, Home, Login, Post, Signup } from './components/pages'
import { authLayout } from './components/index.js'

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
          <authLayout authentication = {false}>
            <Login />
          </authLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <authLayout authentication = {false}>
            <Signup />
          </authLayout>
        )
      },
      {
        path: '/add-posts',
        element: (
          <authLayout authentication>
            {" "}
            <AddPost />
          </authLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <authLayout authentication = {false}>
            {" "}
            <AllPost />
          </authLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <authLayout authentication = {false}>
            {" "}
            <EditPost />
          </authLayout>
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
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
