import React from 'react'
import '../App.css'

export default function TestimonialCard({ review, name, role, image, stars }) {
  return (
   <div className="w-full max-w-sm bg-[#0f0f1f] p-6 rounded-lg shadow-lg text-white flex-shrink-0">
        <div className="mb-4 text-yellow-400 text-lg">
            {"★".repeat(stars)}{"★".repeat(5 - stars)}
        </div>
        <div className='mb-4'>
            {review}
        </div>
        <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
