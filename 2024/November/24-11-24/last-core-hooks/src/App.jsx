import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages Import 
import Home from './pages/Home.jsx'
import SignInPage from './pages/SignInPage.jsx'
import QueryPrint from './pages/QueryPrint.jsx'
import DummyDataPage, { fetchDataFn } from './pages/DummyDataPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/query-print",
    element: <QueryPrint />
  },
  {
    path: "/dummy",
    element: <DummyDataPage />,
    loader: fetchDataFn
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
