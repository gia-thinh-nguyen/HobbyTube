'use client'
import React from 'react'
import { useState,useEffect } from 'react'

const VideoDescription = ({videoIdProp,thumbnailProp,titleProp,channelIdProp,channelTitleProp}) => {
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
        if (dataChannel && dataChannel.items) {
            setChannelData(dataChannel.items[0]);
          }
    }

    useEffect(()=>{
        fetchChannelData();
    },[])
    const videoData={videoid:videoIdProp,thumbnail:thumbnailProp,title:cleanedTitle,channelid:channelIdProp,channeltitle:cleanedChannelTitle}
    const saveVideo=(vid)=>{
        console.log(vid)
    }
    return mounted?(
        <div className='md:hidden w-full md:w-[79vw] py-[3px] md:pt-[6px] md:px-5'>
            <h5 className='w-full px-3 pt-1'>{cleanedTitle?cleanedTitle:'Title here'}</h5>
            <div className='flex md:hidden justify-between items-center px-3'>
                <div className='flex justify-center items-center gap-4 pt-1 pb-2'>
                    <img src={channelData?channelData.snippet.thumbnails.default.url:''} alt='' width={50} height={50} className='rounded-full'></img>
                    <p>{channelTitleProp?cleanedChannelTitle:''}</p>
                </div>
                <button className='flex justify-center items-center bg-gradient-to-r from-[#db6060] to-[#b81c1c] text-white  w-[80px] h-[30px] rounded-lg cursor-pointer shadow-lg hover:shadow-gray-600' onClick={()=>saveVideo(videoData)}>SAVE</button>
            </div>
        </div>
      ):<div/>
}

export default VideoDescription