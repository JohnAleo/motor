import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiperwrapper } from '../styles/multicarousel';

export default function Carousel() {
  return (
    < Swiperwrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ytimg.com/vi/-L-ZHETBOcc/maxresdefault.jpg" alt="wallpaper1" style={{height:'400px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/></SwiperSlide>
        <SwiperSlide><img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-oboi-doma-na-kolesakh-32.jpg" alt="wallpaper2" style={{height:'400px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} /></SwiperSlide>
        <SwiperSlide><img src="https://cdn2.adrianflux.co.uk/wp-adrianflux/uploads/2021/10/caravan-insurance-lake.jpg" alt='wallpaper' style={{height:'400px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} /></SwiperSlide>
        <SwiperSlide><img src="https://timbuckturv.com/wp-content/uploads/2017/12/Fotolia_226327598_Subscription_Monthly_M.jpg" alt='wallpaper' style={{height:'400px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/></SwiperSlide>
        <SwiperSlide><img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-dom-na-kolesakh-oboi-6.jpg" alt="wallpaper5"style={{height:'400px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/></SwiperSlide>
        <SwiperSlide><img src="https://toyota-faq.ru/wp-content/uploads/6/c/8/6c80009ab1f3767d7dc00a0b43115e23.jpeg" alt="wallpaper6" style={{height:'400px',backgroundPosition:'100%',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}/></SwiperSlide>
      </Swiper>
    </Swiperwrapper>
  );
}
