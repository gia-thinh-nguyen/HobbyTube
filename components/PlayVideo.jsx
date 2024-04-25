'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react'


const PlayVideo = ({videoIdProp,titleProp,channelIdProp,channelTitleProp}) => {
    const [channelData,setChannelData]=useState(null);
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
   }, [])
   
    const cleanedTitle=decodeURIComponent(titleProp);

     const fetchKey = async () => {
        const res = await fetch("/key"); 
        const data = await res.json(); 
        return data    
    }; 
    
    const fetchChannelData=async()=>{
        const config = await fetchKey(); 
        const apiKey = config.myKey
        const resChannel=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIdProp}&key=${apiKey}`);
        const dataChannel=await resChannel.json();
        setChannelData(dataChannel?.items[0]);
    }

    useEffect(()=>{
        fetchChannelData();
    },[])
  return mounted?(
    <div className='w-full md:w-[78vw] pt-[80px] md:pt-[100px] md:px-5'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoIdProp}`} controls={true} width='100%' height='80vh'/>
        <div className='flex gap-8 p-3 '>
            <div className='hidden md:flex justify-center items-center'>
                <img  src={channelData?channelData.snippet.thumbnails.default.url:''} alt='/' width={50} height={50} className='rounded-full'></img>
            </div>
            <div className='flex-initial w-[1000px]'>
                <h5 className='w-full'>{cleanedTitle?cleanedTitle:'Title here'}</h5>
                <p className='hidden md:block'>{channelTitleProp}</p>
            </div>
            <div className='hidden md:flex justify-center items-center bg-[#800080] text-white w-[100px] h-[40px] rounded-lg cursor-pointer ml-[300px]'>SAVE</div>
        </div>
        <div className='flex md:hidden justify-between px-3'>
            <div className='flex justify-center items-center gap-4'>
                <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt='/' width={50} height={50} className='rounded-full'></img>
                <p>{channelTitleProp}</p>
            </div>
            
            <div className='flex justify-center items-center bg-[#800080] text-white  w-[80px] h-[30px] rounded-lg cursor-pointer'>SAVE</div>
        </div>
    </div>
  ):<div/>
}

export default PlayVideo

///need to add a save,history, firebase, customize
