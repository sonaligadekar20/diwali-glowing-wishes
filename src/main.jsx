import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './views/Home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])

const root = ReactDOM.createRoot(document.getElementById)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />)
