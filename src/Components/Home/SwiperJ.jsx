

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperJ() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=' text-black flex flex-col  justify-center  mx-5'>
            <h3 className=' text-h6 text-black font-normal mb-9'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</h3>
            <h2 className=' text-h5'>Manish Choudhary</h2>
            <h4 className=' text-h6'>Lahore, India</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' text-black flex flex-col  justify-center  mx-5'>
            <h3 className=' text-h6 text-black font-normal mb-9'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</h3>
            <h2 className=' text-h5'>Manish Choudhary</h2>
            <h4 className=' text-h6'>Lahore, India</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' text-black flex flex-col  justify-center  mx-5'>
            <h3 className=' text-h6 text-black font-normal mb-9'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</h3>
            <h2 className=' text-h5'>Manish Choudhary</h2>
            <h4 className=' text-h6'>Lahore, India</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
