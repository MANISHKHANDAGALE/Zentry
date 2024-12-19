import React from 'react'

const About = () => {
  return (
    <div id='about' className='min-h-screen w-screen '>
        <div className='relative flex flex-col mb-8 mt-36 items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome To  Zentry</h2>
            <div className='text-4xl font-zentry mt-5 text-center uppercase leading-[0.8] md:text-[6rem] '>
            Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure
            </div>
            <div className='about-subtext'>
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
            </div>
        </div>
        <div id='clip' className='h-dvh w-screen'>
            <div className='about-image mask-clip-path'>
<img src="img/about.webp" alt="background" className='absolute top-0 left-0 size-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default About