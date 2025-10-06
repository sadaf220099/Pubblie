import React from 'react'
import Shape1 from '../../assets/icons/Shape1.png'
import Shape2 from '../../assets/icons/Shape2.png'
import { WorkCards } from './WorkCards'
import work1 from '../../assets/images/work1.png'
import work2 from '../../assets/images/work2.png'
import work3 from '../../assets/images/work3.png'
import Group5 from '../../assets/images/Group5.png'
import circle1 from '../../assets/images/circle1.png'

export const Works = () => {
  const carddata = [
    {
      image: work1,
      cardname: "Create Your Campaign",
      carddetail:
        "Define goals, audience, and deadlines using our step-by-step wizard.",
      classname: "top-36 right-9 lg:right-120",
    },
    {
      image: work2,
      cardname: "Collaborate with Influencers",
      carddetail:
        "Find influencers and manage submissions seamlessly.",
      classname: "top-85 left-0 lg:left-90",
    },
    {
      image: work3,
      cardname: "Analyze Results",
      carddetail:
        "Track performance and refine campaigns with analytics.",
      classname: "bottom-7 right-10 lg:right-120",
    },
  ]

  return (
    <div className="relative w-full min-h-[700px] mb-20 bg-[#FDFDFD]">
      {/* background blobs */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[400px] h-[120px] md:h-[200px] bg-blue-500 rounded-full opacity-70 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -z-0 w-[250px] md:w-[400px] h-[120px] md:h-[200px] bg-blue-500 rounded-full opacity-70 blur-[100px]"></div>

      {/* decorative shapes */}
      <img src={Shape1} alt="shape1" className="absolute left-0 -top-3 z-1 w-12 sm:w-16 md:w-32" />
      <img src={Shape2} alt="shape2" className="absolute right-0 -bottom-30 w-12 sm:w-16 md:w-32" />
      
      {/* heading */}
      <div>
        <h2 className="pt-10 font-bold text-black text-2xl sm:text-3xl md:text-5xl text-center">
          How PUBBLIE Works
        </h2>
        <h4 className="pt-2 text-black text-sm sm:text-base md:text-lg text-center">
          Streamline your campaign journey in three simple steps
        </h4>
      </div>
      <div>
        {/* <img src={circle1} className="hidden w-[64.70px]  md:block lg:ml-143 pt-10 absolute" /> */}
       <div className="relative">
  <img
    src={circle1}
    alt="circle"
    className="hidden md:block absolute  top-4 left-1/3 w-[65px]"
  />
</div>


        <img src={Group5} className="hidden md:block mx-auto h-[400px] lg:h-[600px]" />
      </div>
      <div className="p-10 flex flex-col md:flex-row mx-auto gap-6 justify-center">
        {carddata.map((workcard, index) => (
          <WorkCards
            key={index}
            image={workcard.image}
            cardname={workcard.cardname}
            carddetail={workcard.carddetail}
            classname={workcard.classname}
          />
        ))}
      </div>
    </div>
  )
}
