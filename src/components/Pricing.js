import React from 'react';
import {CheckIcon} from '@heroicons/react/solid'

const Pricing = () => {
  return (
    <div name='pricing'  className='w-full text-black my-24 h-[1800px] md:h-[1100px]'>
       <div className='w-full h-[800px] bg-pink-600'>
       <div className=' max-w-[1240px] mx-auto py-12 '>
          <div className='text-center py-8 text-slate-600'>
            <h2 className='text-3xl uppercase '>Pricing</h2>
            <h3 className='text-5xl text-white font-bold py-8'>The right price for your research</h3>
            <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque asperiores earum placeat veritatis dignissimos itaqu</p>
          </div>
          <div className='grid md:grid-cols-2 '>
            <div className='bg-black text-slate-200 m-4 p-8 rounded-xl shadow-2xl relative'>
              <span className='uppercase px-3 py-1 rounded-2xl bg-pink-600 text-black text-sm'>Standard</span>
              <div>
                <p className='text-6xl flex font-bold py-4'>$49<span className='text-xl text-pink-600 flex flex-col justify-end'>/mo</span></p> 
              </div>
              <p className='text-2xl py-8 text-pink-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <div className='text-2xl '>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem ipsum dolor </p>
                <button className='w-full py-4 my-4'>Get Started</button>
              </div>
            </div>
            <div className='bg-black text-slate-200 m-4 p-8 rounded-xl shadow-2xl relative'>
              <span className='uppercase px-3 py-1 rounded-2xl bg-pink-600 text-black text-sm'>Premium</span>
              <div>
                <p className='text-6xl flex font-bold py-4'>$119<span className='text-xl text-pink-600 flex flex-col justify-end'>/mo</span></p> 
              </div>
              <p className='text-2xl py-8 text-pink-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <div className='text-2xl'>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor </p>
                <p className='py-4 flex'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem ipsum dolor </p>
                <button className='w-full py-4 my-4'>Get Started</button>
              </div>
            </div>
          </div>
       </div>
       </div> 

    </div>
  )
}

export default Pricing