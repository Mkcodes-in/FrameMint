import React from 'react'
import '../App.css'

export default function Button2() {
    return (
        <div className="relative group w-fit mt-8">
            <button className=' relative px-4 py-3 text-white text-[20px] font-semibold rounded-xl bg-gradient-to-b from-[#6a4aff] to-[#5635DA] cursor-pointer transition-all duration-300 transform group-hover:scale-105 shadow-lg group-hover:shadow-[0_10px_25px_-5px_rgba(86,53,218,0.4)] border-t-2 border-[#7a5bff] overflow-hidden z-10'>
                <div className=' absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-xl'></div> Buy the book
                <div className=' absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
        </div>  
    )
}
