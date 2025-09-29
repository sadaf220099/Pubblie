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
    <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-blue-500 rounded-full opacity-70 blur-[120px]'></div>
    <img src={Shape} className='absolute  right-0 -top-10 z-1'/>
    <div className=' pt-20 flex justify-center'>
          <h1 className='font-bold text-black text-5xl '>Transform Your Campaigns </h1>
          </div>
          <div className='pt-5 pb-20 flex justify-center'>
           <h1 className='font-bold text-black text-5xl '> with </h1>
           <h1 className='font-bold text-[#3579F6] text-5xl '>  Pubblie</h1>
      </div>
     <SwiperEffect/>
     <h1 className='text-center pt-10'>Connecting Advertisers and Influencers for Seamless Campaign Success.</h1>
     <div className='flex justify-center p-10'>
     <button className="bg-blue-500 text-white rounded-4xl p-3 pl-5 pr-5 shadow-3xl">Create Account Now</button>
     <button className="bg-blue-500 text-white rounded-4xl p-3 pl-5 pr-5 shadow-3xl"><Icon icon="mdi:arrow-right" width="24" height="24" rotate="" /> </button>
      </div>
     
      <div className='p-10 flex justify-around'>
        <div className='pl-10'>
       <h1 className='font-bold '>20,000+</h1>
       <h1>happy Clients</h1>
        <img src={Shape} className='absolute  -left-10 -bottom-40 '/>
            </div> 
     <img src={icon1} />
      <img src={icon2} />
       <img src={icon3} />
        <img src={icon4} />
         <img src={icon5} />
{/* <img src={Shape} className='absolute  -left-7 -bottom-65 '/> */}

      </div>
    
    </div>
    <Companies/>
    
    </>
  );
};

