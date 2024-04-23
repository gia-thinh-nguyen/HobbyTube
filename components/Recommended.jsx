'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Context } from '../app/WholeContext'
import { useContext } from 'react';

const Recommended = () => {
  const context=useContext(Context);
  return (
    <div className='md:pt-[100px]'>
        {context.videos.map((item,index)=>{
          return(
            <div className='w-full pl-5 py-2' key={index}>
              <Link href={`/video/${item.videoid}/${item.title}`}>
                <Image loader={()=>item.thumbnail} src={item.thumbnail} className='rounded-lg w-full' alt='' width='500' height='500' />
                <div className='flex items-center justify-center'>
                    <p>{item.title}</p>
                    <BsThreeDotsVertical size={20}/>
                </div>
              </Link>    
            </div>
          )
        })}
        
        
    </div>
  )
}

export default Recommended