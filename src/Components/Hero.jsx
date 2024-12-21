import React, { useState } from 'react'
import { useRef,useEffect } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0)
    const totalvideo = 4;
    const nextVideoRef = useRef(null);

    const handleMiniVdclick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);

    }
    const handleLoadedvideo = () => {
        setLoadedVideos((prev) => prev + 1);
    }
    const upcomingVideoIndex = (currentIndex % totalvideo) + 1;
    const getVideosrc = (index) => `videos/hero-${index}.mp4`;
    useEffect(() => {
    if(loadedVideos === totalvideo - 1){
        setIsLoading(false);
    }
    },[loadedVideos])

    const getRandomColor = () =>{
        let color;
        do {
          
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
      
          // Convert the RGB values into a string
          color = `rgb(${r}, ${g}, ${b})`;
        } while (color === 'rgb(0, 0, 0)'); 
      
        return color;
    }
    const [color, setColor] = useState('text-blue-500'); 

    
    useEffect(() => {
      setColor(getRandomColor());
    }, []); 

useGSAP(() =>{
if(hasClicked){
    gsap.set('#next-video',{visibility:'visible'});
    gsap.to('#next-video',{
        transformOrigin: 'center center',
        scale:1,
        duration:1,
        width: '100%',
        height:'100%',
        ease:'power1.in',
        onStart: () => nextVideoRef.current.play(),
    });
    gsap.from('#current-video',{
        duration:1.5,
        ease:'power1.in',
        transformOrigin:'center center',
        scale: 0,
    });
}
},{dependencies:[currentIndex],revertOnUpdate:true});

useGSAP(()=>{
    gsap.set('#video-frame',{
        clipPath:"polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",

    }),
    gsap.from('#video-frame',{
        clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        borderRadius:'0 0 0 0',
        ease:'power1.inOut',
        scrollTrigger:{
            trigger:'#video-frame',
            start:'center center',
            end:'bottom center',
            scrub:true,
        }
    })
})

    return (
        <div id='nexus' className='relative h-dvh w-screen overflow-x-hidden'>
            {isLoading && (
              <div className='absolute flex-center z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                  <div className='three-body'>
                    <div className='three-body__dot'/>
                    <div className='three-body__dot'/>
                    <div className='three-body__dot'/>
                </div>
              </div>
            )}
            <div id='video-frame' className='relative overflow-hidden rounded-lg z-10 bg-blue-75 h-dvh w-screen' >
                <div>
                    {/* //minivdp */}
                    <div className='mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div className='origin-center scale-50 opacity-0 transition-all ease-in duration-500 hover:opacity-100 hover:scale-100 ' onClick={handleMiniVdclick}>

                            <video ref={nextVideoRef} src={getVideosrc(upcomingVideoIndex)}
                             loop
                              muted
                               id='current-video' className='size-64 origin-center object-cover object-center scale-150'
                                onLoadedData={handleLoadedvideo} />

                        </div>
                    </div>
                    {/* //next vd */}
                    <video 
                    ref={nextVideoRef}
                     src={getVideosrc(currentIndex)}
                      loop 
                      muted 
                      id='next-video' 
                      className='absolute-center absolute object-cover object-center invisible size-64 z-20'
                       onLoadedData={handleLoadedvideo} />
{/* // main vd */}
                    <video src={getVideosrc(currentIndex > totalvideo? 1 : currentIndex)} className='left-0 top-0 size-full absolute object-cover object-center ' autoPlay loop muted onLoadedData={handleLoadedvideo} />
                </div>
                <h1 className='absolute bottom-5 right-5 z-40 text-5xl special-font hero-heading text-blue-75 '>
                    G<b>A</b>MING
                </h1>
                <div className='absolute top-0 left-0 z-40 size-full'>
                    <div className='mt-24 px-5 sm:px-10'>
                        <h1 className='text-blue-100 special-font hero-heading'>Redif<b>n</b>e</h1>
                        <p className='text-blue-100 max-w-64 mb-5 font-robert-regular'>Enter The Metagame Layer <br />Unleash The Play Economy  </p>
                        <Button id = "watch-trailer" title = "watch trailer" 
                        lefticon = {<TiLocationArrow />}
                        containerclass = "!bg-yellow-300 flex-center gap-1"
                        />
                    </div>

                </div>
            </div>
            <h1 className='absolute bottom-5 right-5  text-5xl special-font hero-heading  ' style={{color:color}}>
                    G<b>A</b>MING
                </h1>
        </div>
    )
}

export default Hero