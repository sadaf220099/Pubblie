import React from 'react'
import licence from '../../assets/icons/licence.png'
import wallet from '../../assets/icons/wallet.png'
import circle from '../../assets/icons/circle.png'

function Companies() {
  return (
    <div className='bg-companies mt-15 p-4 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12'>
      
      <div className='flex items-center gap-3'>
        <img src={licence} className='w-6 sm:w-8 lg:w-10' />
        <h5 className='text-white text-sm sm:text-base lg:text-lg'>Exclusive content rights</h5>
      </div>

      <div className='flex items-center gap-3'>
        <img src={wallet} className='w-6 sm:w-8 lg:w-10' />
        <h5 className='text-white text-sm sm:text-base lg:text-lg'>Payment handling</h5>
      </div>

      <div className='flex items-center gap-3'>
        <img src={circle} className='w-6 sm:w-8 lg:w-10' />
        <h5 className='text-white text-sm sm:text-base lg:text-lg'>Access 100,000+ creators</h5>
      </div>
      
    </div>
  )
}

export default Companies
