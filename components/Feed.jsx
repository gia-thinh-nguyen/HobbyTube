'use client'
import React, { use, useContext,useEffect,useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../app/WholeContext'


const Feed = () => {   
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
    <div className='w-full h-full text-center'>
        <div className='max-w-[1300px] w-full h-full mx-auto flex flex-col justify-center items-center pt-[150px] '>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {videos?.length>0?videos.map((item,index)=>{
                        return(
                            <div key={index} className='hover:scale-110 rounded-lg shadow-xl'>
                                <Link href={`/video/${item.videoid}/${item.title}/${item.channelid}/${item.channeltitle}`}>
                                    <Image loader={()=>item.thumbnail} src={item.thumbnail} className='rounded-lg' alt='' width='500' height='500' style={{ width: "auto", height: "auto" }} unoptimized={true} priority={true} />
                                    <p className='text-balance line-clamp-2 text-lg pt-1'>{item.title}</p>
                                </Link>             
                            </div>
                        )
                }):Array.from(Array(12).keys()).map((item,index)=>
                  <div key={index} className='w-[300px] h-[200px] rounded-lg m-2 bg-gray-400 animate-pulse pt-[150px]'></div>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Feed