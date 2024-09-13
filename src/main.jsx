import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import PeopleDetails from './Components/PeopleDetails/PeopleDetails.jsx';
import MoreDetail from './Components/MoreDetail/MoreDetail.jsx';
import Login from './Components/Login/Login.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Search from './Components/Search/Search.jsx';
import Disbord from './Components/Disbord/Disbord.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/explore',
        loader:()=>fetch('https://openapi.programming-hero.com/api/retro-forum/posts'),
        element: <PeopleDetails></PeopleDetails>
      },
      {
        path:'/more/:Detailid',
        loader:({params}) => fetch (`https://openapi.programming-hero.com/api/retro-forum/posts`),
        element:<MoreDetail></MoreDetail>
      },
      {
        path:'/mores',
        element:<Login></Login>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/search',
        element:<Search></Search>
      },
      {
        path:'/dis',
        element:<Disbord></Disbord>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
