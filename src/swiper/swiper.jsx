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

export default function Carousel() {
  return (
    <>
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
        <SwiperSlide><img src="https://i.ytimg.com/vi/-L-ZHETBOcc/maxresdefault.jpg" alt="wallpaper1" /></SwiperSlide>
        <SwiperSlide><img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-oboi-doma-na-kolesakh-32.jpg" alt="wallpaper2" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/d8/f6/80/d8f6805401a28688039c9d8ae27ff441.jpg" alt="wallpaper3" /></SwiperSlide>
        <SwiperSlide><img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-oboi-doma-na-kolesakh-13.jpg" alt="wallpaper4" /></SwiperSlide>
        <SwiperSlide><img src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-dom-na-kolesakh-oboi-6.jpg" alt="wallpaper5" /></SwiperSlide>
        <SwiperSlide><img src="https://toyota-faq.ru/wp-content/uploads/6/c/8/6c80009ab1f3767d7dc00a0b43115e23.jpeg" alt="wallpaper6" /></SwiperSlide>
      </Swiper>
    </>
  );
}
