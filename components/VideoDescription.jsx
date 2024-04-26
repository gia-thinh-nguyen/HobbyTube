'use client'
import React from 'react'
import { useState,useEffect } from 'react'

const VideoDescription = ({videoIdProp,titleProp,channelIdProp,channelTitleProp,saveVideo}) => {
    const [channelData,setChannelData]=useState(null);
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
   }, [])
   
    const cleanedTitle=decodeURIComponent(titleProp);
    const cleanedChannelTitle=decodeURIComponent(channelTitleProp);

     const fetchKey = async () => {
        const res = await fetch("/key"); 
        const data = await res.json(); 
        return data    
    }; 
    
    const fetchChannelData=async()=>{
        const config = await fetchKey(); 
        const apiKey = config.googleKey
        const resChannel=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIdProp}&key=${apiKey}`);
        const dataChannel=await resChannel.json();
        setChannelData(dataChannel?.items[0]);
    }

    useEffect(()=>{
        fetchChannelData();
    },[])
    return mounted?(
        <div className='w-full md:w-[79vw] py-[3px] md:pt-[6px] md:px-5 overflow-auto'>
            <div className='flex gap-8 p-3 '>
                <div className='hidden md:flex justify-center items-center'>
                    <img  src={channelData?channelData.snippet.thumbnails.default.url:''} alt='/' width={50} height={50} className='rounded-full'></img>
                </div>
                <div className='flex-initial w-[1000px]'>
                    <h5 className='w-full'>{cleanedTitle?cleanedTitle:'Title here'}</h5>
                    <p className='hidden md:block'>{cleanedChannelTitle}</p>
                </div>
                <button className='hidden md:flex justify-center items-center bg-gradient-to-r from-[#884c88] to-[#7e267e] text-white w-[100px] h-[40px] rounded-lg cursor-pointer ml-[300px]' onClick={()=>saveVideo(videoIdProp,titleProp,channelIdProp,channelTitleProp)}>SAVE</button>
            </div>
            <div className='flex md:hidden justify-between items-center px-3'>
                <div className='flex justify-center items-center gap-4'>
                    <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt='/' width={50} height={50} className='rounded-full'></img>
                    <p>{cleanedChannelTitle}</p>
                </div>
                <button className='flex justify-center items-center bg-gradient-to-r from-[#884c88] to-[#7e267e] text-white  w-[80px] h-[30px] rounded-lg cursor-pointer' onClick={()=>saveVideo(videoIdProp,titleProp,channelIdProp,channelTitleProp)}>SAVE</button>
            </div>
        </div>
      ):<div/>
}

export default VideoDescription