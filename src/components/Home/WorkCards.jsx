import React from 'react'


export const WorkCards =({cardname,carddetail,image,classname }) => {
  return (
    <div className={`!bg-white shadow-md p-3 mt-5 rounded-2xl border-0 flex md:absolute  h-fit md:h-[120px] md:w-100 ${classname}`}>
        <div>
            <h5 className='font-bold'>{cardname}</h5>
            <h6 className='p-1'>{carddetail}</h6>
        </div>
        <div>
            <img src={image}  />
        </div>
      
    </div>
  )
}


