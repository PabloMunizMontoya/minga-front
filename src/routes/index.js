import { createBrowserRouter } from "react-router-dom";
import Carousel from '../components/carousel.jsx'
import Layout from "../layouts/Layout";
import Comments from "../components/comments/Comments.jsx";
import MyComics from "./MyComics/MyComics.jsx";
import NewComic from "./NewComic/NewComic.jsx"
import NewAuthor from "./NewAuthor/NewAuthor.jsx"
import NewChapter from "./NewKhapter/NewChapter.jsx";
import NewCompany from './newCompany/NewCompany.jsx'
import Comic from "./Comics/Comic.jsx";
import Chapters from "../components/Chapters/Chapters.jsx";

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
          path: "/new-cia",
          element: <NewCompany />
        },{
          path: "/comments",
          element: <Comments />
        },{
          path: "/comic/:id",
          element: <Comic/>
        }
      ]
    },
  
  ])

export default indexRouter  