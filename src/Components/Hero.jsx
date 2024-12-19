import React, { useState } from 'react'

const Hero = () => {

const [currentIndex, setCurrentIndex] = useState(1)
const [hasClicked, setHasClicked] = useState(false)
const [isLoading, setIsLoading] = useState(true)
const [loadedVideos, setLoadedVideos] = useState(0)
const totalvideo = 4;
// const nextVideoRef = useRef(null)

const handleMiniVdclick = () => {
setHasClicked(true);
setCurrentIndex(upcomingVideoIndex)

}
const handleLoadedvideo = () => {
setLoadedVideos((prev) => prev+1)
}
const upcomingVideoIndex  = (currentIndex % totalvideo)+1
    const getVideosrc = (index) => `videos/hero-${index}.mp4`
    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative overflow-hidden rounded-lg z-10 bg-blue-75 h-dvh w-screen' >
                <div>
                    <div className='mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div className='origin-center scale-50 opacity-0 transition-all ease-in duration-500 hover:opacity-100 hover:scale-100 ' onClick={handleMiniVdclick}>
                            <video   src={getVideosrc(upcomingVideoIndex)} loop muted id='current-video' className='size-64 origin-center object-cover object-center scale-150' onLoadedData={handleLoadedvideo} />
                            
                        </div>
                    </div>
                    <video src={getVideosrc(currentIndex)} loop muted id='next-video' className='absolute-center absolute object-cover object-center invisible size-64 z-20' onLoadedData={handleLoadedvideo} />
                    <video src={getVideosrc(currentIndex===totalvideo-1 ? 1 : currentIndex)} className='left-0 top-0 size-full absolute object-cover object-center ' autoPlay loop muted onLoadedData={handleLoadedvideo}/>
                </div>
                <h1>
                    a
                </h1>
            </div>
        </div>
    )
}

export default Hero