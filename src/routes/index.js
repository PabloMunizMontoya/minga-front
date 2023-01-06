import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import NewCompany from './newCompany/NewCompany.jsx'


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
          path: "/NewCompany",
          element: <NewCompany />
        }
      ]
    },
  
  ])

export default indexRouter  