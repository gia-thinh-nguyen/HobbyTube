'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import thumbnail from '../public/assets/thumbnail.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Context } from '../app/WholeContext'
import { useContext } from 'react';

const Recommended = () => {
  const context=useContext(Context);
  return (
    <div className='md:pt-[100px]'>
        {context.videos.map((item,index)=>{
          return(
            <div className='w-full' key={index}>
              <Link href={`/video/${item.id}`}>
                <Image loader={()=>item.snippet.thumbnails.medium.url} src={item.snippet.thumbnails.medium.url} className='rounded-lg w-full' alt='' width='500' height='500' />
                <div className='flex items-center justify-center'>
                    <p>{item.snippet.title}</p>
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