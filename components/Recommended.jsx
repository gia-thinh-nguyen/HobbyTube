'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Context } from '../app/WholeContext'
import { useContext,useEffect,useState } from 'react';

const Recommended = () => {
  
  const[videos,setVideos]=useState([]);
  const{category}=useContext(Context);

  const dbFetch = async () => {
    const res = await fetch(`/api/${category}`); 
    const data = await res.json();
    return data  
  }
  const setVidFetch=async()=>{
    const item=await dbFetch();
    const videos=item.videos.rows;
    const randomVideos=videos.sort(() => 0.5 - Math.random()).slice(0, 28);
    setVideos(randomVideos);
  }
  useEffect(() => {
    setVidFetch();
  }, [category])
  return (
    <div className='md:pt-[100px]'>
        {videos.map((item,index)=>{
          return(
            <div className='w-full pl-5 py-2 hover:scale-105 rounded-lg shadow-xl relative' key={index}>
              <Link href={`/video/${item.videoid}/${item.title}`}>
                <Image loader={()=>item.thumbnail} src={item.thumbnail} className='rounded-lg w-full' alt='' width='500' height='500' style={{ width: "auto", height: "auto" }} unoptimized={true} priority={true}/>
                <div className='flex items-center justify-center w-[320px]'>
                    <p >{item.title.length > 70 ? item.title.substring(0, 70) + '...' : item.title}</p>
                    <BsThreeDotsVertical size={20} className='absolute right-[10px]'/>
                </div>
              </Link>    
            </div>
          )
        })}
    </div>
  )
}

export default Recommended