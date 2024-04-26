'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Context } from '../app/WholeContext'
import { useContext} from 'react';

const Recommended = () => {
  
  const{videos}=useContext(Context);

  return (
    <div className='md:pt-[140px]'>
        {videos.map((item,index)=>{
          return(
            <div className='w-full pl-5 py-2 hover:scale-105 rounded-lg shadow-xl relative' key={index}>
              <Link href={`/video/${item.videoid}/${item.title}/${item.channelid}/${item.channeltitle}`}>
                <Image loader={()=>item.thumbnail} src={item.thumbnail} className='rounded-lg w-full' alt='' width='700' height='500' unoptimized={true} priority={true}/>
                <div className='flex items-center justify-center w-[320px] pt-1'>
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