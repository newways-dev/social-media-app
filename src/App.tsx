import { useContext } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { Info, Navbar, Sidebar } from './components'
import { Home, Login, Profile, Register } from './pages'
import styles from './App.module.scss'
import { AuthContext } from './context/authContext'

function App() {
  const { user } = useContext(AuthContext)

  const Layout = () => {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.center}>{<Outlet />}</div>
          <Info />
        </div>
      </>
    )
  }

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!user) {
      return <Navigate to='/login' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
