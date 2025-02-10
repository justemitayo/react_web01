import React from 'react';
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon} from '@heroicons/react/solid'
import bgimg from '../assets/images.jpeg'
const Hero = () => {
  return (
    <div className='w-full h-screen bg-black text-white flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8  '>
          <p className='text-2xl'>Unique Sequencing & Production</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'> Cloud Management</h1>
          <p className='text-2xl'>This is our Tech brand</p>
          <button className='py-3 px-6 my-4 sm:w-[68%]'>Get Started</button>
        </div>
          <div>
            <img className='w-full h-full' src={bgimg} alt='/' />
          </div>
          <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-pink-600 border border-slate-300 rounded-xl text-center shadow-xl'>
          <p className='text-black font-bold'>DATA SERVICES</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-300'><CloudUploadIcon className='h-6 text-black'/>App Security</p>
            <p className='flex px-4 py-2 text-slate-300'><DatabaseIcon className='h-6 text-black'/> Dashboard Design</p>
            <p className='flex px-4 py-2 text-slate-300'><PaperAirplaneIcon className='h-6 text-black'/> Cloud Data</p>
            <p className='flex px-4 py-2 text-slate-300'><ServerIcon className='h-6 text-black'/> API</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero