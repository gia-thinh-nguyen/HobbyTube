'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react'


const PlayVideo = ({videoIdProp}) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
       }, [])
    
  return mounted?(
    <div className='w-full md:w-[79vw] pt-[80px] md:pt-[140px] md:px-5 overflow-auto'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoIdProp}`} controls={true} width='100%' height='80vh'/>
    </div>
  ):<div className='w-full md:w-[79vw] pt-[80px] md:pt-[140px] md:px-5 h-[95vh] rounded-lg m-2 bg-gray-400 animate-pulse'/>
}

export default PlayVideo

///need to add a save,history(redux), firebase, customize
