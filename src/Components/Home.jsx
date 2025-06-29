import React from 'react'
import '../App.css'
import ImagesUrl from './ImagesUrl'
import Testimonials from './Testimonials'

export default function Home() {
  return (
    <section className="relative p-2 pt-15 md:p-10 lg:p-20 bg-[#0f0f1a] overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#5635DA] rounded-full blur-[200px] opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#5635DA] rounded-full blur-[200px] opacity-50 z-0 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative grid gap-4 grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-20 z-10 gap-y-16">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Learn how to <span className='text-[#6940d6]'>design</span> <br />
            creative interfaces from <span className='text-[#6940d6]'>scratch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            At Landify, we blend artistry and strategy to create designs that not only captivate but also elevate.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#7A4FFF] text-white px-6 py-3 rounded-lg cursor-pointer font-medium hover:bg-[#6940d6] transition">
              Buy the book
            </button>
            <button className="bg-[#1f1f2e] text-white px-6 py-3 rounded-lg cursor-pointer font-medium hover:bg-[#2c2c3e] transition">
              Free preview
            </button>
          </div>

          {/* Trusted Section */}
          <div className="flex items-center gap-4 flex-wrap pt-6">
            {/* Avatars */}
            <div className="flex -space-x-3">
              {ImagesUrl.slice(0, 5).map((item, index) => (
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  key={index}
                  src={item}
                  alt="user"
                />
              ))}
            </div>
            <div>
              <p className="text-white text-sm md:text-base">
                Trusted by 1M+ customers
              </p>
              <p className="text-white text-sm md:text-base">
                ⭐⭐⭐⭐⭐ 4.2/5 (45k reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Right Book Card */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-[400px] rounded-2xl overflow-hidden animate-float">
            {/* Shine Border */}
            <div className="shine-border"></div>

            <div className="bg-[#7A4FFF] w-full h-full p-6 rounded-2xl text-white relative z-10">
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
                <svg width="180" height="180" viewBox="0 0 200 200" fill="none">
                  <path
                    d="M100,100 C130,30 170,70 100,100 C70,170 30,130 100,100 Z"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="absolute bottom-8 left-6 right-6 z-10">
                <h2 className="text-lg font-semibold leading-tight">
                  Designing creative <br /> user interfaces
                </h2>
                <p className="text-sm mt-2 text-white/80">by Dmytri Ivanov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <Testimonials />
    </section>
  )
} 