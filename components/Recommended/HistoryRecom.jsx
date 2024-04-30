'use client'
import React, {useContext,useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../../app/WholeContext'
import HygraphApi from '../../app/hygraph/HygraphApi';


const HistoryRecom = ({playingId}) => {
    const{userEmail}=useContext(Context);
    const[videos,setVideos]=useState([]);

    const getHistory=async()=>{
        const data=await HygraphApi.getHistoryList(userEmail);
        console.log(data)
        setVideos(data?.archive.historyInfo);
    }
    useEffect(()=>{
        if (userEmail) {
            getHistory(userEmail);
        }
    },[userEmail])
   
  return (
    <div className='md:pt-[140px] md:h-[105vh]'>
        {videos?.length>0?[...videos].reverse().map((item,index)=>{
          return item.historyJson[0].videoid==playingId?null:(
            <div className={`w-full pl-5 py-2 hover:scale-105 rounded-lg shadow-xl relative`} key={index}>
              <Link href={`/savePlayer/${item.historyJson[0].videoid}/${item.historyJson[0].title}/${item.historyJson[0].channelid}/${item.historyJson[0].channeltitle}/${item.historyJson[0].thumbnail}`}>
                <Image src={!item.historyJson[0].thumbnail==''?item.historyJson[0].thumbnail:'/assets/alt.jpg'} className='rounded-lg w-full' alt='' width='700' height='500' unoptimized={true} priority={true}/>
                <div className='flex items-center justify-center w-full py-2'>
                    <p className='line-clamp-2'>{item.historyJson[0].title}</p>                   
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

export default HistoryRecom