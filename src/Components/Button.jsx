import React from 'react'
import '../App.css'
export default function Button() {
    return (
        <div className="flex flex-col items-center space-y-0">
            <button className="cursor-pointer relative px-6 py-3 bg-[#5635DA] text-white font-medium rounded-md overflow-hidden shadow-lg">
                <span className="relative z-10">Register</span>
                <div className=" absolute top-0 left-0 h-full w-[40px] bg-gradient-to-r from-white/40 via-white/10 to-transparent animate-shine"></div>
            </button>   
        </div>

    )
}
