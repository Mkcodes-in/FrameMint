import React from 'react'
import { Features } from '../Data/Features'
import { ChevronRight } from 'lucide-react'

export default function AdvanceFeatures() {
  return (
    <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
      {/* Header Section */}
      <div className='max-w-3xl mb-16'>
        <span className='inline-block rounded-full px-4 py-1.5 text-sm font-medium text-[#3b00eb] bg-[#ece8f8] mb-6'>
          BOOK CHAPTERS
        </span>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6'>
          From basics to <span className='text-[#6f40fd]'>advanced</span>. 
          <br className='hidden md:block' /> Definitive guide to modern design.
        </h1>
        <p className='text-lg text-gray-600'>
          Explore eight insightful chapters covering every aspect of UI design, from foundational principles to advanced techniques.
        </p>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {Features.map((item) => (
          <div 
            key={item.id}
            className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#6f40fd]/20"
          >
            <div className='p-3 mb-4 bg-[#f5f1ff] inline-block rounded-lg group-hover:bg-[#6f40fd] group-hover:text-white transition-colors duration-300'>
              {React.cloneElement(item.icon, { className: "text-[#6f40fd] group-hover:text-white" })}
            </div>
            <h3 className='text-xl font-semibold mb-3 text-gray-900 flex items-start'>
              <span className='text-gray-400 mr-2'>{item.id}.</span>
              {item.tilte}
            </h3>
            <p className='text-gray-600 mb-4'>{item.description}</p>
            <a 
              href="#" 
              className="inline-flex items-center text-sm text-[#6f40fd] font-medium group-hover:text-[#3b00eb] transition-colors duration-300 mt-auto"
            >
              Read chapter
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}