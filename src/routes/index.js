import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import Form from "../components/form/Form.jsx";

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
          path: "/form",
          element: <Form />
        }
      ]
    },
  
  ])

export default indexRouter  