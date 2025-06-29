import React, { useEffect, useState } from 'react'
import '../App.css'
import Button from './Button';

export default function Hero() {
    const [active, setActive] = useState(false);
    const [scroll, setScroll] = useState(false);
    const WebLinks = ['Features', 'About', 'Testimonials', 'Pricing', 'FAQ\'s'];

    const handleActive = () => setActive(!active);
    const closeActive = () => setActive(false);

    useEffect(() => {
        const OnScroll = () => setScroll(window.scrollY > 10);
        window.addEventListener('scroll', OnScroll);
        return () => window.removeEventListener('scroll', OnScroll);
    }, []);

    useEffect(() => {
        if (active) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [active]);


    return (
        <header className="bg-gray-950 text-white ">
            <nav className={`fixed top-0 sm:mt-4 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out z-50
  ${scroll ? "bg-white px-6 py-2 rounded shadow text-gray-950 backdrop-blur-sm w-full max-w-3xl" : "bg-transparent px-6 py-4 w-full max-w-7xl"}`}>
                <div className='max-w-7xl mx-auto sm:px-4 flex items-center justify-between'>
                    {/* Logo */}
                    <div className={`text-2xl font-semibold z-50`}>{scroll ? "FM" : "FrameMint"}</div>

                    {/* Desktop Nav */}
                    <div className='hidden md:flex items-center gap-8'>
                        <ul className='flex gap-6 font-medium'>
                            {WebLinks.map((item) => (
                                <li key={item} className='group relative'>
                                    <a href={`#${item.toLowerCase()}`} className='hover:text-[#5635DA] transition-colors duration-200'>
                                        {item}
                                    </a>
                                    <div className='absolute bottom-0 left-0 h-0.5 bg-[#5635DA] w-0 group-hover:w-full transition-all duration-300'></div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button />

                    {/* Mobile Menu Button */}
                    <button onClick={handleActive} className='cursor-pointer md:hidden p-2 relative z-50 w-10 h-10 flex items-center justify-center'>
                        <span className={`absolute w-6 h-0.5 ${scroll ? "bg-gray-950" : "bg-white"} transition-all duration-300 ${active ? 'rotate-45' : '-translate-y-2'}`}></span>
                        <span className={`absolute w-6 h-0.5 ${scroll ? "bg-gray-950" : "bg-white"} transition-all duration-300 ${active ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`absolute w-6 h-0.5 ${scroll ? "bg-gray-950" : "bg-white"} transition-all duration-300 ${active ? '-rotate-45' : 'translate-y-2'}`}></span>
                    </button>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`fixed top-0 left-0 w-full m-0 h-screen bg-[#6043d6] backdrop-blur-md 
  transition-all duration-500 z-40 flex flex-col items-center justify-center
  ${active ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
                >
                    <ul className='flex flex-col items-center gap-8 text-xl text-white'>
                        {WebLinks.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={closeActive}
                                    className='hover:text-blue-400 transition duration-200'
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>
        </header>
    )
}
