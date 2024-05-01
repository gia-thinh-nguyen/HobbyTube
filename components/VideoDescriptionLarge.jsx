'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import {Context} from '../app/WholeContext';
import HygraphApi from '../app/hygraph/HygraphApi';


const VideoDescriptionLarge = ({videoIdProp,thumbnailProp,titleProp,channelIdProp,channelTitleProp,saved}) => {
    const [channelData,setChannelData]=useState(null);
    const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
   }, []);
    const cleanedTitle=decodeURIComponent(titleProp);
    const cleanedChannelTitle=decodeURIComponent(channelTitleProp);
    const [isSaved, setIsSaved] = useState(false);
    const {userEmail}=useContext(Context);

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
    const saveVideo=()=>{
        HygraphApi.uploadSaveList(userEmail,videoData);
        setIsSaved(true);
    }
    return mounted?(
        <div className='hidden md:flex w-full md:w-[78vw] py-[3px] md:pt-[6px] md:px-5'>
            <div className='flex gap-8 p-3 justify-center items-center w-full'>
                <div className='hidden md:flex justify-center items-center'>
                    <img  src={channelData?channelData.snippet.thumbnails.default.url:''} alt='' width={50} height={50} className='rounded-full'></img>
                </div>
                <div className='grow'>
                    <h5 className='w-full tracking-wild'>{cleanedTitle?cleanedTitle:'Title here'}</h5>
                    <p className='hidden md:block '>{channelTitleProp?cleanedChannelTitle:''}</p>
                </div>
              {!isSaved&&!saved?<button className='flex justify-center items-center bg-gradient-to-r from-[#db6060] to-[#b81c1c] text-white  w-[80px] h-[30px] rounded-lg cursor-pointer shadow-lg hover:shadow-gray-600 scale-[120%] ' onClick={()=>saveVideo()}>SAVE</button>
              :<button className='flex justify-center items-center bg-gradient-to-r from-[#ccc9c9] to-[#a09c9c] text-white  w-[80px] h-[30px] rounded-lg cursor-pointer shadow-lg scale-[120%] ' >SAVED!</button>}
               {/*<button className='flex justify-center items-center bg-gradient-to-r from-[#db6060] to-[#b81c1c] text-white  w-[80px] h-[30px] rounded-lg cursor-pointer shadow-lg hover:shadow-gray-600 scale-[120%] ' >UNSAVE</button> */}
            </div>
        
        </div>
      ):<div/>
}

export default VideoDescriptionLarge