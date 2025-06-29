import React from 'react'
import images from './ImagesUrl'

export default function About() {
  return (
    <section className='relative overflow-hidden'>
      {/* Light Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b w-full from-white via-purple-50 to-purple-200"></div>
    <div className='max-w-6xl mx-auto md:mt-20 relative'>

      {/* Content */}
      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='md:pl-20 md:pt-20 p-6'>
          <h4 className='rounded-3xl p-3 pt-1 pb-1 mb-4 text-[#3b00eb] bg-[#ece8f8] inline-block'>
            ABOUT THE AUTHOR
          </h4>
          <h1 className='text-3xl sm:text-3xl md:text-4xl font-medium leading-tight mb-6'>
            Meet our design <span className='text-[#3b00eb]'>specialist</span>
          </h1> 
        </div>

        <div className='grid md:grid-cols-2 text-gray-700 gap-14 md:p-20 p-6'>
          <div>
            <p className='md:mb-8'>
              With a passion for creativity and a knack for problem-solving, our author offers a unique perspective to the world of design.
            </p>
            <p>
              His journey began with a passion for crafting delightful user experiences, propelling him to explore the intricate relationship between form and function.
            </p>
          </div>
          <div>
            <p>
              With years of hands-on experience and a dedication to ongoing learning, he excels in simplifying complex concepts into practical insights. His mission? Empowering aspiring designers.
            </p>
            <div className='mt-8 flex items-center justify-start'>
              <img 
                className='p-2 size-20 rounded-full border-4 border-white shadow-md' 
                src={`${images[3]}`} 
                alt="Olivia Power" 
              />
              <div className='flex flex-col-reverse items-start ml-4'>
                <h1 className='text-sm text-gray-500'>UI Designer</h1>
                <h1 className='text-gray-900 font-medium text-lg'>Olivia Power</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}