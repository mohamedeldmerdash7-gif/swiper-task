import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Photoslide() {
  return (
    <div style={{ width: '600px', margin: '40px auto' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
        onSlideChange={() => console.log('Slide changed')}
      >
        <SwiperSlide style={{ background: '#ddd', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ background: '#bbb', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: '#999', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ background: '#777', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ background: '#555', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}