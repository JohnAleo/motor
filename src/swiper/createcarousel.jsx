import React, { useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import camp1 from "../assets/camping-place/camp1.jpg"
import camp2 from "../assets/camping-place/camp2.jpg"
import camp3chi from "../assets/camping-place/camp3chi.jpg"
import camp4 from "../assets/camping-place/camp4.jpg"
import camp5 from "../assets/camping-place/camp5.jpg"
import camp6 from "../assets/camping-place/camp6.jpg"
import camp7 from "../assets/camping-place/camp7.jpg"
import camp8 from "../assets/camping-place/camp8.jpg"
import camp9 from "../assets/camping-place/camp9.jpg"
import camp101 from "../assets/camping-place/camp101.jpg"
import camp111 from "../assets/camping-place/camp111.jpg"
import camp12chi from "../assets/camping-place/camp12chi.jpg"
import { CampingCarus } from '../styles/campingstyle';


const CampingCarousel=()=>{
   //multi carousel
   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
return(
<Carousel
showDots={false}
arrows={false}
responsive={responsive}
infinite
autoPlay
autoPlaySpeed={2000}
transitionDuration={2000}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet", "mobile"]}> 
  <CampingCarus><img src={camp1} alt="camp1" /></CampingCarus>
  <CampingCarus><img src={camp2} alt="camp2" /></CampingCarus>
  <CampingCarus><img src={camp3chi} alt="camp3"/></CampingCarus>
  <CampingCarus><img src={camp4} alt="camp4" /></CampingCarus>
  <CampingCarus><img src={camp5} alt="camp5" /></CampingCarus>
  <CampingCarus><img src={camp6} alt="camp6" /></CampingCarus>
  <CampingCarus><img src={camp7} alt="camp7"/></CampingCarus>
  <CampingCarus><img src={camp8} alt="camp8" /></CampingCarus>
  <CampingCarus><img src={camp9} alt="camp9" /></CampingCarus>
  <CampingCarus><img src={camp101} alt="camp10" /></CampingCarus>
  <CampingCarus><img src={camp111} alt="camp11" /></CampingCarus>
  <CampingCarus><img src={camp12chi} alt="camp12" /></CampingCarus>
</Carousel>
);
};
export default CampingCarousel;