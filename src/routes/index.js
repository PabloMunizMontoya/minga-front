import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import NewCompany from './newCompany/NewCompany.jsx'
import ComicsFromCompany from "./ComicsCompany/Comics.From.Company.jsx";


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
        },
        {
          path: "/company/:id",
          element: <ComicsFromCompany />
        }
      ]
    },
  
  ])

export default indexRouter  