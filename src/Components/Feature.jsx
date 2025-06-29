import React from 'react'
import { Notebook, Power, Tv } from 'lucide-react'

export default function Feature() {
    const features = [
        {
            icon: <Notebook size={28} className="text-[#6f40fd]" />,
            title: "Best practices for creating a user-friendly product",
            description: "Discover proven techniques for crafting intuitive and engaging products."
        },
        {
            icon: <Tv size={28} className="text-[#6f40fd]" />,
            title: "Delve into the design process from concept to execution",
            description: "Explore every stage of the journey, from brainstorming creative concepts to bringing them to life."
        },
        {
            icon: <Power size={28} className="text-[#6f40fd]" />,
            title: "Acquire essential knowledge and industry insights",
            description: "Acquire essential insights to begin your design journey, empowering you to navigate the industry landscape effectively."
        }
    ]

    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
            <div className='max-w-3xl'>
                <span className='inline-block rounded-full px-4 py-1.5 text-sm font-medium text-[#3b00eb] bg-[#ece8f8] mb-6'>
                    WHAT YOU'LL LEARN
                </span>
                <h2 className='text-3xl sm:text-3xl md:text-5xl font-medium leading-tight mb-6'>
                    Master the Essentials of <span className='text-[#6f40fd]'>Creative Design</span>
                </h2>
                <p className='text-lg text-gray-600 mb-12 md:mb-20 max-w-2xl'>
                    Gain expertise in design, explore processes, and effortlessly apply best practices to create stunning, user-friendly interfaces.
                </p>
            </div>

            {/* Features Grid */}
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        className="group relative bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#6f40fd]/20"
                    >
                        <div className='p-3 mb-6 bg-[#f5f1ff] inline-block rounded-lg group-hover:text-white transition-colors duration-300'>
                            {feature.icon}
                        </div>
                        <h3 className='text-xl font-semibold mb-3 text-gray-900'>{feature.title}</h3>
                        <p className='text-gray-600'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}