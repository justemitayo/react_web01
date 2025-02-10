import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32 '>
        <div className='max-w-[1240px] mx-auto '>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the World</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque asperiores earum placeat veritatis dignissimos itaque</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='py-8 border rounded-xl shadow-xl '>
                    <p className='text-6xl font-bold text-pink-600'>100%</p>
                    <p className='mt-2 text-slate-500'>Completion</p>
                </div>
                <div className='py-8 border rounded-xl shadow-xl '>
                    <p className='text-6xl font-bold text-pink-600'>24/7</p>
                    <p className='mt-2 text-slate-500'>Delivery</p>
                </div>
                <div className='py-8 border rounded-xl shadow-xl '>
                    <p className='text-6xl font-bold text-pink-600'>100K</p>
                    <p className='mt-2 text-slate-500'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About