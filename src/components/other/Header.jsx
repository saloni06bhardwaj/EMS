import React from 'react'

const Header = () => {
  return (
    <div className='h-screen flex items-baseline justify-between px-20 py-16 bg-[#565454] text-white'>
    <h1 className='text-3xl font-medium'>Hello <br/> <span className='text-4xl font-bold'>Saloni</span> </h1>
    <button className=' bg-red-200 text-black px-3 py-3 rounded-lg font-bold'>Log Out </button>
    </div>
  )
}

export default Header
