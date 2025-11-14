import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import UserDetails from './components/UserDetails.jsx';
import UpdateUser from './components/UpdateUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: '/users/:id',
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UserDetails
  },
  {
    path: '/update/:id',
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UpdateUser
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
