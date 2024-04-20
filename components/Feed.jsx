'use client'
import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../app/WholeContext'


const Feed = () => {   
    const context=useContext(Context);
    //fetch to get 
    
  return (
    <div className='w-full h-full text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto flex flex-col justify-center items-center pt-[100px] '>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {context.videos.map((item,index)=>{
                    if(!item.status.madeForKids){
                        return(
                            <div key={index}>
                                <Link href={`/video/${item.id}`}>
                                    <Image loader={()=>item.snippet.thumbnails.medium.url} src={item.snippet.thumbnails.medium.url} className='rounded-lg' alt='' width='500' height='500'/>
                                    <p>{item.snippet.title}</p>
                                </Link>             
                            </div>
                        )
                    }
                    
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Feed