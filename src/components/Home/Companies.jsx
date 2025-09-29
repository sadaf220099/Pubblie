import React from 'react'
import licence from '../../assets/icons/licence.png'
import wallet from '../../assets/icons/wallet.png'
import circle from '../../assets/icons/circle.png'


function Companies() {
  return (
    <div className='bg-[#1F4790] mt-15 p-3 flex justify-center '>
        <div className='flex pl-10 '>
      <img src={licence} />
      <h5 className='text-white'>Exclusive content rights</h5>
      </div>
      <div className='flex pl-10'>
      <img src={wallet} />
      <h5 className='text-white '>Payment handling</h5>
      </div>
      <div  className='flex pl-10'>
      <img src={circle} />
      <h5 className='text-white'>Access 100,000+ creators</h5>
      </div>
    </div>
  )
}

export default Companies
