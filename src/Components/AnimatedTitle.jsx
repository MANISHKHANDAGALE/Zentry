import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';


const AnimatedTitle = ({title,containerclass}) => {
    const containerRef = useRef(null);

useEffect(()=>{
const ctx = gsap.context(()=>{
    const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
},containerRef)
return () => ctx.revert();
},[])


  return (
    <div ref={containerRef} className={`text-4xl text-white font-zentry mt-5 text-center uppercase leading-[0.8] md:text-[6rem] ${containerclass} `}>

    {title.split("<br />").map((line,index)=> (
<div key={index} className='flex-center text-white max-w-full flex-wrap gap-2 px-10 md:gap-3'>
    {line.split(" ").map((word,i)=>(
<span key={i} className='animated-word' dangerouslySetInnerHTML={{__html:word}} />
    ))}
</div>
    ))}
    
    </div>
  )
}

export default AnimatedTitle