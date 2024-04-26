'use client'
import React, { useState, useEffect } from 'react'
import PlayVideo from '../../../components/PlayVideo'
import Recommended from '../../../components/Recommended'
import VideoDescription from '../../../components/VideoDescription'


const Page= ({params}) => {
  //if small screen, make the video description scollable with recommended videos
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMediumScreen(window.innerWidth >= 768);
      const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
    return (
      <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col'>
            <PlayVideo  videoIdProp={params.videoInfo[0]} />
             {isMediumScreen && (
          <VideoDescription
            videoIdProp={params.videoInfo[0]}
            titleProp={params.videoInfo[1]}
            channelIdProp={params.videoInfo[2]}
            channelTitleProp={params.videoInfo[3]}
            saveVideo={(videoIdProp, titleProp, channelIdProp, channelTitleProp) =>
              console.log(videoIdProp, titleProp, channelIdProp, channelTitleProp)
            }
          />
        )}
          </div>
          <div className='overflow-y-auto h-[calc(100vh-2rem)] w-full md:w-[20vw]'> 
          {!isMediumScreen && (
          <VideoDescription
            videoIdProp={params.videoInfo[0]}
            titleProp={params.videoInfo[1]}
            channelIdProp={params.videoInfo[2]}
            channelTitleProp={params.videoInfo[3]}
            saveVideo={(videoIdProp, titleProp, channelIdProp, channelTitleProp) =>
              console.log(videoIdProp, titleProp, channelIdProp, channelTitleProp)
            }
          />
        )}
            <Recommended/>
          </div>
      </div>
    )
}

export default Page