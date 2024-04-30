'use client'
import React, {useEffect,useState, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../../WholeContext'
import HygraphApi from '../../hygraph/HygraphApi';

const History = () => {   
    const{userEmail}=useContext(Context);
    const[videos,setVideos]=useState([]);
    const[isNull,setIsNull]=useState(false);
    const getHistory=async()=>{
        const data=await HygraphApi.getHistoryList(userEmail);
        if(data?.archive.historyInfo.length==0){
            setIsNull(true);
        }
        setVideos(data?.archive.historyInfo);
    }
    useEffect(()=>{
        if (userEmail) {
            getHistory(userEmail);
        }
    },[userEmail])
  return (
    <div className='w-full h-full text-center'>
        <div className='max-w-[1300px] w-full h-full mx-auto flex flex-col justify-center items-center pt-[85px] md:pt-[170px] '>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {videos?.length>0?videos.map((item,index)=>{
                        return(
                            <div key={index} className='flex flex-col justify-center items-center hover:scale-110 rounded-lg shadow-xl'>
                                <Link href={`/historyPlayer/${item.historyJson[0].videoid}/${item.historyJson[0].title}/${item.historyJson[0].channelid}/${item.historyJson[0].channeltitle}/${item.historyJson[0].thumbnail}`}>
                                    <div className='flex justify-center items-center'><Image loader={()=>item.historyJson[0].thumbnail} src={item.historyJson[0].thumbnail} className='rounded-lg' alt='' width='700' height='500'  unoptimized={true} priority={true} /></div>
                                    <p className='text-balance line-clamp-2 text-lg pt-1'>{item.historyJson[0].title}</p>
                                </Link>             
                            </div>
                        )
                }):null}
                
                
            </div>
        </div>
        {isNull?<div className='w-full h-full flex items-center justify-center pt-[100px] font-bold'>No videos found</div>:null}
    </div>
  )
}

export default History

