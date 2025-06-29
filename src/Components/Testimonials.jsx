import React, { useRef, useEffect } from 'react';
import testimonials from '../Data/Data';
import TestimonialCard from './TestimonialCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const scrollRef = useRef(null);

useEffect(() => {
  if (window.innerWidth > 768) {
    let ctx = gsap.context(() => {
      gsap.to('.card', {
        xPercent: -100 * (testimonials.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: "-50%",
          trigger: scrollRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (testimonials.length - 1),
          end: () => `+=${scrollRef.current.offsetWidth}`,
        },
      });
    }, scrollRef);
    return () => ctx.revert();
  }
}, []);


  return (
    <section
      className="bg-fixed max-w-6xl m-auto h-auto flex items-center bottom-0 bg-center bg-no-repeat bg-cover py-20 text-white overflow-x-hidden"
      ref={scrollRef}
    >
      <div className="flex flex-nowrap overflow-x-auto space-x-6 px-6 scrollbar-hide">
        {testimonials.map((item, index) => (
          <div className="card flex-shrink-0" key={index}>
            <TestimonialCard
              review={item.review}
              name={item.name}
              role={item.role}
              image={item.image}
              stars={item.stars}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
