'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Carousel = () => {
  const slides = [
    'img.png',
    'img2.png',
    'img3.png',
    'img.png',
    'img2.png',
    'img3.png',
    'img.png',
    'img2.png',
    'img3.png',
  ];

  return (
    <div className="w-full px-10 py-10">
      <Swiper
        modules={[Autoplay]} 
        spaceBetween={20} 
        slidesPerView={5} 
        slidesPerGroup={1} 
        autoplay={{ delay: 900 }} 
        loop 
        navigation
        pagination={{ clickable: false }} 
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[250px] flex items-center justify-center overflow-hidden">
              <Image
                src={`/${src}`} 
                alt={`Slide ${index + 1}`}
                width={250} 
                height={250} 
                className="object-cover rounded-4xl" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
