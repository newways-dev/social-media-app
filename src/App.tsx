import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { Info, Navbar, Sidebar } from './components'
import { Home, Login, Profile, Register } from './pages'

function App() {
  const user = true

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <Outlet />
          <Info />
        </div>
      </div>
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
