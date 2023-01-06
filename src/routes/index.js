import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import newCompany from './NewCompany/NewCompany'


export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        },
        {
          path: "/newCompany",
          element: <newCompany />
        }
      ]
    },
  
  ])

export default indexRouter  