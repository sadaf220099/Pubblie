import React from "react";
import { UserCard } from "./UserCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";
import user6 from "../../assets/images/user6.png";
import Button from "./Button";

export const User = () => {
  const carddata = [
    { image: user1,
       username: "Andrew Tate",
        userdetail: "“Track performance & refine campaigns with analytics”"
       },

    { image: user2, username: "Jimmy Johns", userdetail: "“Track performance & refine campaigns with analytics”" },
    { image: user3, username: "Palo Tate", userdetail: "“Track performance & refine campaigns with analytics”" },
    { image: user4, username: "Roma Peol", userdetail: "“Track performance & refine campaigns with analytics”" },
    { image: user5, username: "Salena Gomiz", userdetail: "“Track performance & refine campaigns with analytics”" },
    { image: user6, username: "Marques Loffy", userdetail: "“Track performance & refine campaigns with analytics”" },
  ];

  return (
    <div className="bg-[var(---primary)] bg-cover py-12">
      <div>
        <h2 className="text-black font-bold text-xl text-center">
          What Our Users Say
        </h2>
        <h4 className="pt-2 font-bold text-black text-3xl md:text-4xl text-center">
          See How PUBBLI Transforms Campaigns
        </h4>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10 px-5 md:px-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 700, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2},       // Mobile
            640: { slidesPerView: 3},     // Small tablets
            1024: { slidesPerView: 5 },    // Laptops
            1280: { slidesPerView: 5 },    // Desktops
            1536: { slidesPerView: 5 },    // Very large screens
          }}
        >
          {carddata.map((usercard, index) => (
            <SwiperSlide key={index}>
              <UserCard
                image={usercard.image}
                username={usercard.username}
                userdetail={usercard.userdetail}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="text-center p-10 text-base md:text-lg">
        Join thousands of satisfied users revolutionizing their campaigns with PUBBLI,
        the <br />
        platform for seamless collaboration and measurable success.
      </p>

      <div className="flex justify-center">
        {/* <button className="bg-white border-blue-500 border-2 rounded-3xl text-blue-500 px-8 py-2 md:px-10">
          Join Us Now
        </button> */}
        <Button type="join" className=" border-blue-500 border-2 rounded-3xl text-blue-500 px-8 py-2 md:px-10">Join Us Now</Button>
      
      </div>
    </div>
  );
};
