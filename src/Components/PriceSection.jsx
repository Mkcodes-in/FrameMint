import React from 'react'
import { Price } from '../Data/Price'

export default function PriceSection() {
  return (
    <section className="relative p-2 pb-15 pt-15 md:p-10 lg:p-20 bg-[#0f0f1a] overflow-hidden">
      {/* Glow Background */}
       <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#5635DA] rounded-full blur-[150px] opacity-50 z-0 pointer-events-none"></div>
  <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-[#5635DA] rounded-full blur-[150px] opacity-50 z-0 pointer-events-none"></div>
      {/* {Heading} */} 
      <div className='text-start mb-12 max-w-6xl m-auto'>
        <h1 className='text-4xl text-white p-4 font-semibold mb-4'>Explore our pricing options</h1>
        <p className='text-gray-400 max-w-xl p-4'>Choose the plan that fits your needs and unlock exclusive features to fast-track your journey to becoming a design expert.</p>
      </div>
      {/* {Price Cards} */}
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8'>
        {/* {Free Preview Card} */}
        {Price.map(itm => (
          <div key={itm.id} className='relative z-10 bg-[#161622] border border-[#2d2d42] rounded-xl hover:border-[#5635DA] p-8 transition-all duration-300'> 
            <span className='text-sm text-[#8f8fff] bg-[#1e1e38] px-3 py-1 rounded-full mb-4 inline-block'>{itm.plan}</span>
            <div className='flex items-center mt-2 gap-2 space-y-2 mb-4'>
              <h2 className='text-4xl font-bold text-gray-400'>{itm.price}</h2>
              <span className='text-gray-400'>{itm.pricedes}</span>
            </div>
            <button className="cursor-pointer w-full bg-[#1e1e38] text-white py-3 px-6 rounded-lg font-medium mb-6 shadow-[inset_0_2px_0_rgba(255,255,255,0.1)] hover:bg-[#2c2c44] transition-all duration-300">{itm.buy}</button>
            <h3 className='text-sm font-light mb-4 text-gray-400 p-2'>Key features</h3>
            <ul className='space-y-3 text-sm text-gray-300'>
              <li>{itm.keyfeature.map((Feature, idx) => (
                <span className="flex items-start text-gray-300 p-2 gap-2" key={idx}>
                  {Feature.icon}{Feature.text}
                </span>
              ))}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
