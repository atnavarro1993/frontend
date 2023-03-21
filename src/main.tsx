import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./routes/Home/home";
import NotFound from "./routes/404/notFound";
import Dashboard from "./shared/layouts/Dashboard";
import Projects from "./routes/Projects/Projects";
import Contact from "./routes/Contact/Contact";


const router = createBrowserRouter([
    {
        path : '/',
        element : <Dashboard/>,
        errorElement: <NotFound/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/proyectos',
                element:<Projects/>
            },
            {
                path:'/contacto',
                element:<Contact/>
            }
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
