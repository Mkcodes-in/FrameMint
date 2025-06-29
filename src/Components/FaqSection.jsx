import React, { useState } from 'react'
import { Faq } from '../Data/Faq'
import { ChevronUp } from 'lucide-react'

export default function FaqSection() {
    const [ShowQuestion, setShowQuestion] = useState(null);

    const handleShowQuestion = (id) => {
        setShowQuestion(ShowQuestion === id ? null : id);
    }

    return (
        <div className='max-w-6xl mx-auto text-start p-4 mt-8 md:p-20'>
            <span className='inline-block rounded-3xl px-4 py-1 mb-4 text-[#3b00eb] bg-[#ece8f8] font-medium'>
                WE'VE GOT ANSWERS
            </span>
            <h1 className='text-3xl sm:text-4xl font-bold mt-3 mb-4 text-gray-900'>
                Frequently asked questions
            </h1>
            <p className='text-base sm:text-lg text-gray-600 max-w-2xl mb-8'>
                Get quick answers to your questions and make an informed decision before starting your learning journey.
            </p>
            
            <div className='max-w-4xl mx-auto space-y-4'>
                {Faq.map(itm => (
                    <div
                        key={itm.id}
                        onClick={() => handleShowQuestion(itm.id)}
                        className={`cursor-pointer bg-white p-6 rounded-xl shadow-sm transition-all duration-200 ${
                            ShowQuestion === itm.id 
                                ? 'ring-2 ring-blue-500 shadow-md' 
                                : 'hover:shadow-md hover:bg-gray-50'
                        }`}
                    >
                        <div className='flex justify-between items-center'>
                            <h2 className={`text-lg font-medium ${
                                ShowQuestion === itm.id ? 'text-blue-600' : 'text-gray-800'
                            }`}>
                                {itm.question}
                            </h2>
                            <ChevronUp
                                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                                    ShowQuestion === itm.id ? 'rotate-180' : ''
                                }`}
                            />
                        </div>

                        {/* Answer container */}
                        <div
                            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                ShowQuestion === itm.id 
                                    ? 'grid-rows-[1fr] opacity-100 mt-4' 
                                    : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                            <div className='overflow-hidden min-h-0'>
                                <p className='text-gray-600 leading-relaxed pb-2'>
                                    {itm.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}