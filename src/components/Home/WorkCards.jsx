import React from 'react'


export const WorkCards =({cardname,carddetail,image,classname }) => {
  return (
    <div className={`!bg-white shadow-md p-3 mt-5 rounded-2xl border-0 flex absolute  w-100 h-[120px] ${classname}`}>
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


