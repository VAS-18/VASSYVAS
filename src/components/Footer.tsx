import React from 'react'
import NowPlaying from './NowPlaying'

const Footer = () => {
  return (
    <footer className='relative text-white py-5 w-full mt-auto backdrop-blur-sm'>
      <div className=""></div>
      <div className="container mx-auto text-center flex justify-center relative z-10">
        <NowPlaying/>
      </div>
    </footer>
  )
}

export default Footer
