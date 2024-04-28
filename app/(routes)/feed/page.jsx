'use client'
import React, {useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../../WholeContext'


const Feed = () => {   
    
    const{videos}=useContext(Context);
  return (
    <div className='w-full h-full text-center'>
        <div className='max-w-[1300px] w-full h-full mx-auto flex flex-col justify-center items-center pt-[85px] md:pt-[170px] '>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {videos?.length>0?videos.map((item,index)=>{
                        return(
                            <div key={index} className='flex flex-col justify-center items-center hover:scale-110 rounded-lg shadow-xl'>
                                <Link href={`/video/${item.videoid}/${item.title}/${item.channelid}/${item.channeltitle}/${item.thumbnail}`}>
                                    <div className='flex justify-center items-center'><Image loader={()=>item.thumbnail} src={item.thumbnail} className='rounded-lg' alt='' width='700' height='500'  unoptimized={true} priority={true} /></div>
                                    <p className='text-balance line-clamp-2 text-lg pt-1'>{item.title}</p>
                                </Link>             
                            </div>
                        )
                }):Array.from(Array(12).keys()).map((item,index)=>
                  <div key={index} className='w-[290px] h-[205px] rounded-lg m-2 bg-gray-400 animate-pulse pt-[150px]'></div>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Feed