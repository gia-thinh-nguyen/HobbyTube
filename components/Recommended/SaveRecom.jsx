'use client'
import React, {useContext,useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../../app/WholeContext'
import HygraphApi from '../../app/hygraph/HygraphApi';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoRemoveCircleOutline } from "react-icons/io5";

const SaveRecom = ({playingId}) => {
    const{userEmail}=useContext(Context);
    const[videos,setVideos]=useState([]);
    const [saveButtons, setSaveButtons] = useState([]);
    const [isHover, setIsHover] = useState(true);
    
    const getSave=async()=>{
        const data=await HygraphApi.getSaveList(userEmail);
        setVideos(data?.archive.saveInfo);
        setSaveButtons(Array(data.archive.saveInfo.length).fill(false));
    }
    useEffect(()=>{
        if (userEmail) {
            getSave(userEmail);
        }
    },[userEmail])
    const toggleSaveButton = (index) => {
        setSaveButtons(prev => {
          const newSaveButtons = new Array(prev.length).fill(false);
          newSaveButtons[index] = !prev[index];
          setIsHover(newSaveButtons.every(button => button === false))
          return newSaveButtons;
        });
      };
      const threeFunctions=(e,index)=>{
        e.stopPropagation();
        e.preventDefault();
        toggleSaveButton(index)
      }
  //const unsaveVideo
  return (
    <div className='md:pt-[140px] md:h-[105vh]'>
        {videos?.length>0?[...videos].reverse().map((item,index)=>{
          return item.saveJson[0].videoid==playingId?null:(
            <div className={`w-full pl-5 py-2 ${isHover?"hover:scale-105":''} rounded-lg shadow-xl relative`} key={index}>
              <Link href={`/savePlayer/${item.saveJson[0].videoid}/${item.saveJson[0].title}/${item.saveJson[0].channelid}/${item.saveJson[0].channeltitle}/${item.saveJson[0].thumbnail}`}>
                <Image src={!item.saveJson[0].thumbnail==''?item.saveJson[0].thumbnail:'/assets/alt.jpg'} className='rounded-lg w-full' alt='' width='700' height='500' unoptimized={true} priority={true}/>
                <div className='flex items-center justify-center w-full py-2'>
                    <p className='line-clamp-2'>{item.saveJson[0].title}</p>
                    <div className='relative' onClick={(e)=>threeFunctions(e,index)} >
                        <BsThreeDotsVertical size={32} className='p-1 rounded-full mr-1 hover:bg-gray-300'  />
                      {saveButtons[index] && (
                        <div className='flex justify-center items-center absolute  w-[110px] h-[50px] rounded-lg bg-white hover:bg-gray-300 top-[-5px] ml-[-110px]'>
                          <IoRemoveCircleOutline size={25} /><h6 className='mx-1'>Unsave</h6>
                      </div>
                      )}
                    </div>
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

export default SaveRecom