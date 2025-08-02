import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'; // routerProvider ini merupakan komponen bawaan

  const route = createBrowserRouter([ // createBrowserRouter ini fungsi untuk buat endpoint dan taruh komponen yang ditampilkan
    {path: '/', element: <App/>},
  ])
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      {/* router diabwah merupakan properti bawaan komponen RouterProvider */}
      <RouterProvider router={route}/> 
    </StrictMode>,
  )
