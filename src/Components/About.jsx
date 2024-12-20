import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)
const About = () => {

useGSAP(()=>{
  const ClipAnimation = gsap.timeline({
    scrollTrigger:{
      trigger: "#clip",
      start:"center center",
      end:"+800 center",
      scrub:0.5,
      pin:true,
      pinSpacing:true,
    }
  })
  ClipAnimation.to('#mask-clip-path',{
width:'100vw',
height:'100vh',
borderRadius: 0 ,
  })
})

  return (
    <div id='about' className='min-h-screen w-screen '>
        <div className='relative flex flex-col mb-8 mt-36 items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome To  Zentry</h2>
            <AnimatedTitle title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure" containerclass="mt-5 !text-black text-center"/>
          
            <div className='about-subtext'>
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-700">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
            </div>
        </div>
        <div id='clip' className='h-dvh w-screen'>
            <div id='mask-clip-path' className='about-image'>
<img src="img/about.webp" alt="background" className='absolute top-0 left-0 size-full object-cover min-h-screen w-screen' />
            </div>
        </div>
    </div>
  )
}

export default About