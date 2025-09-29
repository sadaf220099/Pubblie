import React from 'react'

export const Cards =({productname ,productdetail,image})=> {
  return (

    <div className="w-60 mt-5 -rotate-5 border-white-[0.4px] bg-[#FFFFFF2E] rounded-2xl shadow-lg ml-5">
  <img  src={image}  className="w-30 h-30 mx-auto p-3"/>
  <div className="p-3 flex flex-col justify-center">
    <h2 className="text-lg font-bold text-center text-white">{productname}</h2>
    <p className="text-sm text-white text-center px-2 py-3">
      {productdetail}
    </p>
  </div>
</div>



  )
}


