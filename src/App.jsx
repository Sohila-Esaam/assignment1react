import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import StartFrameWork from './components/SrartFrameWork/StartFrameWork'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'

const route = createBrowserRouter([
  {path: '/' , element: <Layout/> , children: [
    {path: '/' , element: <StartFrameWork />},
    {path: '/about' , element: <About />},
    {path: '/contact' , element: <Contact />},
    {path: '/portfolio' , element: <Portfolio />},
    {path: '*' , element: <NotFound />},
  ]}
])

function App() {

  return <RouterProvider router={route} ></RouterProvider>
}

export default App
