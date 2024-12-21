import React from 'react'
import { useRef,useState } from 'react'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle'
const Contact = () => {
    const BentoTilt = ({children,className=""}) =>{
    
    const [transformStyle, settransformStyle] = useState('')
    const  itemRef = useRef(null)
    
    const handleMouseLeave = () => {
    settransformStyle('')
    }
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;
    
      const tiltX = (relativeY - 0.5) * 5.5;
      const tiltY = (relativeX - 0.5) * -5.5;
    
      const newTransform = `perspective(100px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.2, 1.2, 1.2)`;
    
      settransformStyle(newTransform)
    }

    return(
        <div ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} style={{transform:transformStyle}}>
    {children}
        </div>
      )
    }
    const ImageClipBox = ({src,clipclass}) => (
        <BentoTilt className={clipclass}>
<img  src={src} alt="img" />
</BentoTilt>
    )
    return (
        <div id='contact' className=' w-screen min-h-96 px-10 my-20'>
            <div className=' w-full py-24 relative rounded-lg  text-blue-50 sm:overflow-hidden'>
                <div className=' absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
<ImageClipBox 
src="img/contact-1.webp"
clipclass="contact-clip-path-1 md:mt-10"
/>
<ImageClipBox 
src="img/contact-2.webp"
clipclass="contact-clip-path-2 md:mt-12 "
/>
                </div>
                <div className="absolute -top-40 left-20 w-60  sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        src="/img/swordman-partial.webp"
                        clipclass="absolute md:scale-125 md:hidden"
                    />
                    <ImageClipBox
                        src="/img/swordman.webp"
                        clipclass="sword-man-clip-path  md:scale-125"
                    />
                </div>
                <div className='items-center flex flex-col text-center'>
                    <p className='uppercase font-general text-[10px]'>
                        join zentry
                    </p>
                    <AnimatedTitle 
                    title='let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether'
                    containerclass='!sm:text-5xl !uppercase mt-10 !special-font w-full font-zentry !leading-[0.9] !md:text-[6rem]'
                    />
                    
                    
                    
                    <Button title='Contact Us' containerclass='mt-10 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Contact