import React from 'react'
import { useEffect } from 'react'
import './chapters.css'
import chapterAction from '../../store/chapter/actions'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Link as Anchor } from 'react-router-dom'
import comicAction from '../../store/comic/actions'
/* import { useSearchParams } from 'react-router-dom' */

const {getComic} = comicAction
const {getChapter} = chapterAction
export default function Chapters() {
/*     const [page, setPage] = useSearchParams() */
    const chapters = useSelector(store => store.chapters)
    const comics = useSelector(store => store.comics)
    const dispatch = useDispatch()    
    const {id} = useParams()
    
      console.log(id)

/*     const pages = () => {
      setPage({
        pages: 2
      })
    } */

    useEffect(() => {
      if(chapters.chapters.length === 0){
        dispatch(getChapter(id))  
        dispatch(getComic(id))
        console.log(chapters)
      }

            //CONSULTA CHAPTERS CON DIFERENTE ID

    }, [])
  return (
    <div className='content'>
        {chapters.chapters.response?.map(chapter =>
        <div className='chaptercontent' key={chapter.order} >
          <img className='imagecard' src={comics.comics.response?.photo} alt="" />
            <p className='title'>{chapter.title}</p>
          <div className='anchorcontainer'>
          <Anchor to={'/pages'} className='anchor' >View More</Anchor>
          </div>
        </div>)}
        <button className='nextbtn' /* onClick={pages} */ >Next</button>
    </div>
  )
}
