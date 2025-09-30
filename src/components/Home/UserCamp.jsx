
import React from 'react'
import stary from '../../assets/images/stary.png'

export const UserCamp = () => {
  return (
    <div className="relative mb-[100px]">
      {/* First Row */}
      <div className="bg-[#CCE2FF] absolute left-0 right-0 p-2 flex flex-wrap gap-2 justify-center sm:justify-between -rotate-1">
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base whitespace-nowrap">
            EDUCATION
          </h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base whitespace-nowrap">
            COMMUNICATION
          </h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">MEETING</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">
            DISCUSSIONS
          </h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">FUN</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">LEADERSHIP</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">
            COLLABORATION
          </h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">CO</h5>
        </div>
      </div>

      {/* Second Row */}
      <div className="bg-[#CCE2FF] absolute p-2 left-0 right-0 flex flex-wrap gap-2 justify-center sm:justify-between rotate-2">
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">EDUCATION</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">COMMUNICATION</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">MEETING</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">DISCUSSIONS</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">FUN</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">LEADERSHIP</h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">
            COLLABORATION
          </h5>
          <img src={stary} className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
        </div>
        <div className="flex items-center px-2 sm:px-3 md:pl-10">
          <h5 className="text-[#3579F6] text-xs sm:text-sm md:text-base">CO</h5>
        </div>
      </div>
    </div>
  )
}
