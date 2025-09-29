import React from 'react'
import stars from '../../assets/images/stars.png'


export const UserCard = ({ username, userdetail, image }) => {
    return (
        <div className='!bg-white shadow-md mt-5 rounded-2xl  '>
            <div>
                <img src={image} className='mx-auto'/>
            </div>
            <div className='p-3'>
                <h5 className='font-bold '>{username}</h5>
                <img src={stars} />
                <h6 className=''>{userdetail}</h6>
            </div>


        </div>
    )
}

