import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import Elemet1 from "../../assets/images/Elemet1.png";
import Elemet2 from "../../assets/images/Elemet2.png";
import Elemet3 from "../../assets/images/Elemet3.png";
import Elemet4 from "../../assets/images/Elemet4.png";
import Elemet5 from "../../assets/images/Elemet5.png";
import Elemet6 from "../../assets/images/Elemet6.png";
import Elemet7 from "../../assets/images/Elemet7.png";

export default function SwiperEffect() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
       breakpoints={{
            0: { slidesPerView: 2},       // Mobile
            640: { slidesPerView: 3},     // Small tablets
            1024: { slidesPerView: 4 },    // Laptops
            1280: { slidesPerView: 4 },    // Desktops
            1536: { slidesPerView: 5 },    // Very large screens
          }}
      spaceBetween={50}
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 70,
        modifier: 1,
        slideShadows: true,
        
      }}
    //   pagination
      modules={[EffectCoverflow, Pagination ,Autoplay]}
      className="mySwiper"
       autoplay={{ delay: 1000, disableOnInteraction: false }}
    >
      {[Elemet1, Elemet2, Elemet3, Elemet4, Elemet5, Elemet6, Elemet7].map(
        (img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`element-${i + 1}`}
            className="h-35 w-580" />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
