'use client'
import React from 'react'
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react'


const PlayVideo = ({videoIdProp,titleProp}) => {
    const [apiData,setApiData]=useState(null);
    const [channelData,setChannelData]=useState(null);
    const cleanedTitle=decodeURIComponent(titleProp);
     const fetchConfig = async () => {
        const res = await fetch("/api/config"); 
        const data = await res.json(); 
        return data    
    }; 
    
    const fetchData=async()=>{
        const config = await fetchConfig(); 
        const apiKey = config.myKey 
        const res=await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdProp}&key=${apiKey}`);
        const data=await res.json();
        setApiData(data.items[0]);  
    }
    const fetchChannelData=async()=>{
        const config = await fetchConfig(); 
        const apiKey = config.myKey
        const resChannel=await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${apiData?.snippet.channelId}&key=${apiKey}`);
        const dataChannel=await resChannel.json();
        setChannelData(dataChannel.items[0]);
    }

    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
       if(apiData){
        fetchChannelData();
       }
    },[apiData])
  return (
    <div className='w-full md:w-[78vw] pt-[80px] md:pt-[100px] md:px-5'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoIdProp}`} controls={true} width='100%' height='80vh'/>
        <div className='flex gap-8 p-3 '>
            <div className='hidden md:flex justify-center items-center'>
                <img  src={channelData?channelData.snippet.thumbnails.default.url:''} alt='/' width={50} height={50} className='rounded-full'></img>
            </div>
            <div className='flex-initial w-[700px]'>
                <h4>{cleanedTitle?cleanedTitle:'Title here'}</h4>
                <p className='hidden md:block'>{apiData?.snippet.channelTitle}</p>
            </div>
            <div className='hidden md:flex justify-center items-center bg-red-600 text-white w-[100px] h-[40px] rounded-lg cursor-pointer'>Subscribe</div>
        </div>
        <div className='flex md:hidden justify-between px-3'>
            <div className='flex justify-center items-center gap-4'>
                <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt='/' width={50} height={50} className='rounded-full'></img>
                <p>{apiData?.snippet.channelTitle}</p>
            </div>
            
            <div className='flex justify-center items-center bg-red-600 text-white  w-[100px] h-[30px] rounded-lg cursor-pointer'>Subscribe</div>
        </div>
    </div>
  )
}

export default PlayVideo

///need to add recommended, a placeholder content,save&history and change env variable to a more secure way, firebase,database, customize