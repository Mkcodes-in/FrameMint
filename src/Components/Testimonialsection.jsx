import React, { useState } from 'react';
import { Reviews } from '../Data/Review';

export default function Testimonialsection() {

    const [showTestimonilas, setshowTestimonilas] = useState(3);
    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(true);

        setTimeout(() => {
            setshowTestimonilas(prev => prev + 3);
            setLoading(false);
        }, 800);
    }

    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
            {/* Header Section */}
            <div className='text-start ml-4 mr-4 mb-12 lg:mb-16'>
                <span className='inline-block rounded-3xl px-4 py-1 mb-4 text-[#3b00eb] bg-[#ece8f8] font-medium'>
                    REVIEWS
                </span>
                <h2 className='text-3xl sm:text-4xl font-bold mt-3 mb-4 text-gray-900'>
                    Thousands of rave <span className='text-[#3b00eb]'>reviews</span>
                </h2>
                <p className='text-base sm:text-lg text-gray-600 max-w-2xl'>
                    Explore reader feedback praising our ebook for its clarity, practicality, and transformative impact on their design skills.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                {Reviews.slice(0, showTestimonilas).map((itm) => (
                    <div
                        key={itm.id}
                        className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100'
                    >
                        {/* Star Rating */}
                        <div className='flex items-center mb-4'>
                            <div className='text-2xl text-yellow-400'>
                                {"★".repeat(itm.stars)}
                                {"☆".repeat(5 - itm.stars)}
                            </div>
                            <span className='ml-2 text-sm text-gray-500'>{itm.stars}.0</span>
                        </div>

                        {/* Testimonial Text */}
                        <p className='text-gray-700 mb-5 leading-relaxed'>{itm.des}</p>

                        {/* Reviewer Info */}
                        <div className='flex items-center'>
                            <img
                                className='w-10 h-10 rounded-full object-cover mr-3'
                                src={itm.icon}
                                alt={itm.name}
                                loading='lazy'
                            />
                            <div>
                                <h4 className='font-medium text-gray-900'>{itm.name}</h4>
                                <p className='text-sm text-gray-500'>@{itm.username}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* {Testimonilas Loading} */}
           <div className='text-center'>
                {showTestimonilas < Reviews.length ? (loading ?  <div className='animate-spin inline-block mt-8 size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full' role='status'>
              <span className='sr-only'>Loading...</span>
            </div> : <button  
            onClick={handleLoading}
            disabled={loading}
            className='cursor-pointer mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto'>
                Load More   
            </button>) : (
                <p className="bg-[#7A4FFF] text-white px-6 py-3 rounded-lg  inline-block mt-10 font-medium">End Reviews</p>
            )}
           </div>
        </div>
    );
}
