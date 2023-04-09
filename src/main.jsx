import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'




import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About';
import Shop from './components/Shop/Shop';
import Faq from './components/Faq/Faq';
import MyOrder from './components/Faq/My Order/MyOrder';
import Contact from './components/Contact/Contact';
import HomeContant from './HomeContant/HomeContant';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeContant />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/myorder",
        element: <MyOrder />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)