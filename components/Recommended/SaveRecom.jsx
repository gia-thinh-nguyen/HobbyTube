'use client'
import React, {useContext,useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../../app/WholeContext'
import HygraphApi from '../../app/hygraph/HygraphApi';


const SaveRecom = ({playingId}) => {
    const{userEmail}=useContext(Context);
    const[videos,setVideos]=useState([]);
    const getSave=async()=>{
        const data=await HygraphApi.getSaveList(userEmail);
        setVideos(data?.archive.saveInfo);
    }
    useEffect(()=>{
        if (userEmail) {
            getSave(userEmail);
        }
    },[userEmail])
    
  return (
    <div className='md:pt-[140px] md:h-[105vh]'>
        {videos?.length>0?videos.map((item,index)=>{
          return item.saveJson[0].videoid==playingId?null:(
            <div className={`w-full pl-5 py-2 hover:scale-105 rounded-lg shadow-xl relative`} key={index}>
              <Link href={`/savePlayer/${item.saveJson[0].videoid}/${item.saveJson[0].title}/${item.saveJson[0].channelid}/${item.saveJson[0].channeltitle}/${item.saveJson[0].thumbnail}`}>
                <Image src={!item.saveJson[0].thumbnail==''?item.saveJson[0].thumbnail:'/assets/altThumbnail.jpg'} className='rounded-lg w-full' alt='' width='700' height='500' unoptimized={true} priority={true}/>
                <div className='flex items-center justify-center w-full py-2'>
                    <p className='line-clamp-2'>{item.saveJson[0].title}</p>
                </div>
              </Link>
                  
            </div>
          )
        }):Array.from(Array(12).keys()).map((item,index)=>
          <div key={index} className='w-[20vw] h-[240px] rounded-lg m-2 bg-gray-400 animate-pulse pt-[150px]'></div>
        )}
    </div>
  )
}

export default SaveRecom