import React from 'react'
import Shape from '../../assets/images/shape.png'
import SwiperEffect from './Swiper';
import { Icon } from '@iconify/react';
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'
import icon5 from '../../assets/icons/icon5.png'
import Companies from './Companies';

export const HeroSection =() => {
  return (
    <>
    <div className='relative w-full bg-[#FDFDFD]'>
     
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] md:w-[400px] h-[150px] sm:h-[180px] md:h-[200px] bg-blue-500 rounded-full opacity-70 blur-[100px]'></div>
      
     
      <img src={Shape} className='absolute right-0 -top-10 z-1 w-20 sm:w-28 md:w-40' />

     
      <div className='pt-12 sm:pt-20 flex justify-center px-4 text-center'>
        <h1 className='font-bold text-black text-3xl sm:text-4xl md:text-5xl'>Transform Your Campaigns </h1>
      </div>

      <div className='pt-4 pb-12 sm:pb-20 flex justify-center flex-wrap gap-2 px-4 text-center'>
        <h1 className='font-bold text-black text-3xl sm:text-4xl md:text-5xl'> with </h1>
        <h1 className='font-bold text-[#3579F6] text-3xl sm:text-4xl md:text-5xl'> Pubblie</h1>
      </div>

      <SwiperEffect/>

      <h1 className='text-center pt-6 sm:pt-10 px-4 text-sm sm:text-base md:text-lg'>
        Connecting Advertisers and Influencers for Seamless Campaign Success.
      </h1>

      
      <div className='flex  sm:flex-row justify-center items-center gap-0 p-6 sm:p-10'>
        <button className="bg-blue-500 text-white rounded-4xl px-6 py-3 shadow-3xl text-sm sm:text-base">Create Account Now</button>
        <button className="bg-blue-500 text-white rounded-4xl px-6 py-3 shadow-3xl flex items-center justify-center text-sm sm:text-base">
          <Icon icon="mdi:arrow-right" width="20" height="20" />
        </button>
      </div>
     
      {/* Stats & Icons */}
      <div className='flex  flex-col md:flex-row justify-center gap-10 '>
        <div className='pl-4 sm:pl-10 text-center sm:text-left'>
          <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>20,000+</h1>
          <h1 className='text-sm sm:text-base md:text-lg'>happy Clients</h1>
          {/* Bottom Left Shape */}
          <img src={Shape} className='absolute -left-6 sm:-left-10 -bottom-20 sm:-bottom-40 w-20 sm:w-28 md:w-36'/>
        </div> 

      <div className=' flex gap-4 md:gap-20 flex-wrap justify-center'>
          <img src={icon1} className=' brand'/>
        <img src={icon2} className='brand'/>
        <img src={icon3} className='brand'/>
        <img src={icon4} className='brand'/>
        <img src={icon5} className='brand'/>
      </div>
      </div>
    
    </div>
    <Companies/>
    </>
  );
};
