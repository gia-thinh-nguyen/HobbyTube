'use client'
import React, {useEffect,useState, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../../WholeContext'
import HygraphApi from '../../hygraph/HygraphApi';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoRemoveCircleOutline } from "react-icons/io5";

const Save = () => {   
    const{userEmail}=useContext(Context);
    const[videos,setVideos]=useState([]);
    const [saveButtons, setSaveButtons] = useState([]);
    const [isHover, setIsHover] = useState(true);
    const[isNull,setIsNull]=useState(false);
    const getSave=async()=>{
        const data=await HygraphApi.getSaveList(userEmail);
        if(data?.archive.saveInfo.length==0){
            setIsNull(true);
        }
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
      console.log(videos)
  return (
    <div className='w-full h-full text-center'>
        <div className='max-w-[1300px] w-full h-full mx-auto flex flex-col justify-center items-center pt-[85px] md:pt-[170px] '>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-h-[100px]">
                {videos?.length>0?videos.map((item,index)=>{
                        return(
                            <div key={index} className={`flex flex-col justify-center items-center ${isHover?"hover:scale-110":''} rounded-lg shadow-xl`}>
                                <Link href={`/savePlayer/${item.saveJson[0].videoid}/${item.saveJson[0].title}/${item.saveJson[0].channelid}/${item.saveJson[0].channeltitle}/${item.saveJson[0].thumbnail}`} >
                                    <div className='flex justify-center items-center'>
                                        <Image src={!item.saveJson[0].thumbnail==''?item.saveJson[0].thumbnail:'/assets/alt.jpg'} className='rounded-lg' alt='' width='700' height='500'  unoptimized={true} priority={true} />
                                    </div>
                                    <div className='flex items-center justify-center w-full py-2'>
                                        <p className='line-clamp-2'>{item.saveJson[0].title}</p>
                                        <div className='relative' onClick={(e)=>threeFunctions(e,index)} >
                                            <BsThreeDotsVertical size={32} className='p-1 rounded-full mr-1 hover:bg-gray-300'  />
                                        {saveButtons[index] && (
                                            <div className='flex justify-center items-center absolute  w-[110px] h-[50px] rounded-lg bg-white hover:bg-gray-300 top-[-5px] ml-[-110px]'onClick={()=>saveVideo(item)}>
                                            <IoRemoveCircleOutline size={25} /><h6 className='mx-1'>Unsave</h6>
                                        </div>
                                        )}
                                        </div>
                                    </div>
                                </Link>             
                            </div>
                        )
                }):null}
                
                
            </div>
        </div>
        {isNull?<div className='w-full h-full flex items-center justify-center pt-[100px] font-bold'>No saved videos</div>:null}
    </div>
  )
}

export default Save