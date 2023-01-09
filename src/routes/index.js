import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import Comments from "../components/comments/Comments.jsx";
import NewComic from "./NewComic/NewComic.jsx"
import NewAuthor from "./NewAuthor/NewAuthor.jsx"
import NewChapter from "./Newchapter/Newchapter.jsx";

export const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Carousel />
        },{
          path :"/my-comics",
          element: <MyComics />
        },{
          path :"/new-comic",
          element: <NewComic />
        },{
          path :"/new-author",
          element: <NewAuthor />
        },{
          path: "/new-chapter",
          element: <NewChapter/>
        },{
          path: "/comments",
          element: <Comments />
        }
      ]
    },
  
  ])

export default indexRouter  