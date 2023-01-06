import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Newauthor from "./newAutor/NewAuthor.jsx";
import Layout from "../layouts/Layout";
import Chapters from "./Newchapters/Newchapters.jsx";

export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        }, {
          path: "/authors",
          element:<Newauthor/>
        },
      ]
    }
  
  ])

export default indexRouter  