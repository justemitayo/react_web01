import React from 'react';
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid';

import supportimg from '../assets/1.jpg';

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/50 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportimg} alt='//'/>
        </div>
        <div className='max-w-[1240px] mx-auto text-pink-600 relative'>
            <div className='px-4 py-12'>
                <h2 className=' text-3xl pt-8 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center text-black'>Finding The Right Team</h3>
                <p className='py-4 text-3xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. hytwec8ecgufiite6eiuuiuiio kjiojrfuj iurfuh Cumque asperiores earum placeat veritatis dignissimos itaqueLorem ipsum dolor sit amet consectetur adipisicing elit. hytwec8ecgufiite6eiuuiuiio kjiojrfuj iurfuh Cumque asperiores earum placeat veritatis dignissimos itaque</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 '>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-black rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl py-6 text-black'>Sales</h3>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque asperiores earum placeat veritatis dignissimos itaque</p>
                    </div>
                    <div className='bg-black pl-8 py-6 text-xl '>
                        <p className='text-white flex item-center '>Contact Us <ArrowSmRightIcon className='w-5 ml-2 text-pink-600' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-black rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl py-6 text-black'>Techical Support</h3>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque asperiores earum placeat veritatis dignissimos itaque</p>
                    </div>
                    <div className='bg-black pl-8 py-6 text-xl '>
                        <p className='text-white flex item-center '>Contact Us < ArrowSmRightIcon className='w-5 ml-2 text-pink-600' /></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-black rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl py-6 text-black'>Media Inquiries</h3>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque asperiores earum placeat veritatis dignissimos itaque</p>
                    </div>
                    <div className='bg-black pl-8 py-6 text-xl '>
                        <p className='text-white flex item-center '>Contact Us <ArrowSmRightIcon className='w-5 ml-2 text-pink-600' /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support