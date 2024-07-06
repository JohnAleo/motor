import React from 'react'
import Carousel from '../../swiper/swiper';
import MultiCarousel from '../../swiper/multiCarousel';
import Homepop from './indexpop';
import MultiCarouselNew from '../../swiper/multicarouselnew';

const HomeComponent = () => {
  return (
    <>
    <Carousel/>
    {/* <MultiCarousel/> */}
    <MultiCarouselNew/> 
    <Homepop/>
    </>
  )
}

export default HomeComponent;