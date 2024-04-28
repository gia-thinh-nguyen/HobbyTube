'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import { useState,useEffect,useContext } from 'react'
import { Context } from '../app/WholeContext'
import { useRouter } from 'next/navigation';

const PlayVideo = ({videoIdProp}) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
       }, [])
    const{videos}=useContext(Context);
    const router = useRouter();
    const redirectToNextVideo = () => {
      router.push(`/video/${videos[0].videoid}/${videos[0].title}/${videos[0].channelid}/${videos[0].channeltitle}/${videos[0].thumbnail}`);
    };
  return mounted?(
    <div className='w-full md:w-[79vw] pt-[80px] md:pt-[140px] md:px-5 overflow-auto'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoIdProp}`} controls={true} width='100%' height='80vh' onEnded={redirectToNextVideo}/>
    </div>
  ):<div className='w-full md:w-[79vw] pt-[80px] md:pt-[140px] md:px-5 h-[95vh] rounded-lg m-2 bg-gray-400 animate-pulse'/>
}

export default PlayVideo

///need to add a save,history(redux), firebase, customize
