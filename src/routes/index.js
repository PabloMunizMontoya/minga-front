import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Newauthor from "./newAutor/NewAuthor.jsx";
import Layout from "../layouts/Layout";
import Comments from "../components/comments/Comments.jsx";
import Chapters from "./Newchapters/Newchapters.jsx";
import AddNewComic from "./NewComic/AddNewComic.jsx"
import MyComics from "./MyComics/MyComics.jsx"

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
        },{
          path :"/mycomics",
          element: <MyComics />
        },{
          path :"/new-comic",
          element: <AddNewComic />
        },{
          path: "/chapters",
          element: <Chapters/>
        },
        {
          path: "/comments",
          element: <Comments />
        }
      ]
    }
  
  ])

export default indexRouter  