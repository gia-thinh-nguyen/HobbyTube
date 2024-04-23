'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../app/WholeContext'


const Feed = () => {   
    const context=useContext(Context);
    //fetch to get 
    
  return (
    <div className='w-full h-full text-center'>
        <div className='max-w-[1300px] w-full h-full mx-auto flex flex-col justify-center items-center pt-[100px] '>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {context.videos.map((item,index)=>{
                        return(
                            <div key={index} className='hover:scale-110 rounded-lg shadow-xl'>
                                <Link href={`/video/${item.videoid}/${item.title}`}>
                                    <Image loader={()=>item.thumbnail} src={item.thumbnail} className='rounded-lg' alt='' width='500' height='500'/>
                                    <p className='text-balance line-clamp-2 text-lg pt-1'>{item.title}</p>
                                </Link>             
                            </div>
                        )

                })}
                
            </div>
        </div>
    </div>
  )
}

export default Feed