import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'


const BentoCard = ({src,title,description,IsComingSoon}) =>{
  return(
<div className=' relative size-full'>
  <video src={src} autoPlay loop muted className='absolute top-0 left-0 size-full object-cover object-center'/>
  <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
    <div>
      <h1 className='bento-title special-font'>
  {title}
      </h1>
        {description && (
          <p className='text-xs md:text-base max-w-64 mt-3'>
            {description}
          </p>
        )}
    </div>
  </div>
</div>

  )
}
const BentoTilt = ({children,className=""}) =>{
  return(
    <div className={className}>
{children}
    </div>
  )
}


const Features = () => {
  return (
    <section className='bg-black pb-52'>
<div className='container mx-auto px-3 md:px-10'>
<div className='px-10 py-32  '>
<p className="font-circular-web text-lg text-blue-50">
                        Into the Metagame Layer
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding universe where a vibrant
                        array of products converge into an interconnected overlay experience
                        on your world.
                    </p>
</div>
<BentoTilt className='border-hsla h-96  w-full mb-7 rounded-md overflow-hidden relative md:h-[65vh]'>
<BentoCard
src = "videos/feature-1.mp4"
title = {<>radia<b>n</b>t</>}
description = "cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
IsComingSoon
/>
</BentoTilt>
<div className='grid grid-cols-2 grid-rows-3 h-[135vh] gap-7'>
  <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
<BentoCard 
src= "videos/feature-2.mp4"
title={<>zig<b>m</b>a</>}
description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
/>
  </BentoTilt>
  <BentoTilt className='bento-tilt_1 ms-32 row-span-1 md:col-span-1 md:ms-0'>
<BentoCard
src="videos/feature-3.mp4"
title={<>Ne<b>x</b>us</>}
description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
/>
  </BentoTilt>
  <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
<BentoCard
src="videos/feature-4.mp4"
title={<>A<b>z</b>ul</>}
description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
/>
  </BentoTilt>
  <BentoTilt className='bento-tilt_2 '>
    <div className='flex flex-col size-full justify-between p-5 bg-violet-500'>
<h1 className='special-font bento-title text-black max-w-64'>
M<b>o</b>re comi<b>n</b>g s<b>o</b>o<b>n</b>!
</h1>
<TiLocationArrow className='m-5 self-end scale-[5]'/>
    </div>
  </BentoTilt>
  <BentoTilt className='bento-tilt_2'>
<video src='videos/feature-5.mp4'
loop
autoPlay
muted
className='size-full object-cover object-center'
/>
  </BentoTilt>
</div>
</div>
    </section>
  )
}

export default Features