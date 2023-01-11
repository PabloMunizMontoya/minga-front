
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../../layouts/nav/Nav'
import { useSearchParams } from 'react-router-dom/dist'
import chapterAction from '../../store/chapter/actions'

const { getChapter } = chapterAction

/* ;
import Slider from 'react-slick';
import axios from 'axios';

function OneChapterCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/chapters/')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map(image => (
        <img key={image.id} src={image.url} alt={image.title} />
      ))}
    </Slider>
  );
}

export default OneChapterCarousel; */




function Pages() {
  const chapterStore = useSelector (state => state.chapters)
  const dispatch = useDispatch()
  const [ searchParams ] = useSearchParams()
  
  useEffect( () => {
    const currentParams = Object.fromEntries([...searchParams])
    if (currentParams.comic_id && currentParams.order) {
      dispatch(getChapter({comic: currentParams.comic_id, chapter: currentParams.order}))
    }
  }, [searchParams])
  const getPageImages = () => {
    if (chapterStore.chapter?.length === 0){
      return <p>Loading...</p>
    }else {
      return chapterStore.chapter.response[0].pages?.map((page)=> ( 
        <div className='imageContainer' key={page}> <img src={page} alt="img" /></div>
      ))
    }
  }
 

return (
  <>
  <Nav/>
  <div>
    <header className='header'>
      <div className='titleContainer'>
        <h2>{chapterStore.chapters.response?.title}</h2>
      </div>
    </header>
    <div className='comiPage'>
      {getPageImages()}
    </div>
    <div className='commentContainer'>
      Footer
    </div>
  </div>
  </>
);

}

export default Pages;