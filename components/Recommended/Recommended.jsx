'use client'
import React, {useContext,useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbPlaylistAdd } from "react-icons/tb";
import { Context } from '../../app/WholeContext'
import HygraphApi from '../../app/hygraph/HygraphApi';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css'

const Recommended = () => {
  const{videos}=useContext(Context);
  const [shuffledVideos, setShuffledVideos] = useState([]);
  useEffect(() => {
    const shuffled = [...videos].sort(() => Math.random() - 0.5);
    setShuffledVideos(shuffled);
  }, [videos]); 
  const [saveButtons, setSaveButtons] = useState(Array(videos.length).fill(false));
  const [isHover, setIsHover] = useState(true);
  const {userEmail}=useContext(Context);

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
  const historyVideo=(videoData)=>{
    HygraphApi.uploadHistoryList(userEmail,videoData).then((res) => {console.log(res)})
    }
  const saveVideo=(videoData)=>{
    HygraphApi.uploadSaveList(userEmail,videoData).then((res) => {
        if (res) { toast('Video saved!');}}).catch(() => {toast('Video already saved!');
      });;
}
  return (
    <div className='md:pt-[140px] md:h-[105vh]'>
        {shuffledVideos?.length>0?shuffledVideos.map((item,index)=>{
          return(
            <div className={`w-full pl-5 py-2 ${isHover?"hover:scale-105":''} rounded-lg shadow-xl relative`} key={index}>
              <Link href={`/video/${item.videoid}/${item.title}/${item.channelid}/${item.channeltitle}/${item.thumbnail}`} onClick={()=>historyVideo(item)}>
                <Image loader={()=>item.thumbnail} src={item.thumbnail} className='rounded-lg w-full' alt='' width='700' height='500' unoptimized={true} priority={true}/>
                <div className='flex items-center justify-center w-full py-2'>
                    <p className='line-clamp-2'>{item.title}</p>
                    <div className='relative' onClick={(e)=>threeFunctions(e,index)} >
                        <BsThreeDotsVertical size={32} className='p-1 rounded-full mr-1 hover:bg-gray-300'  />
                      {saveButtons[index] && (
                        <div className='flex justify-center items-center absolute  w-[110px] h-[50px] rounded-lg bg-white hover:bg-gray-300 top-[-5px] ml-[-110px]'onClick={()=>saveVideo(item)}>
                          <TbPlaylistAdd size={25} /><h6 className='mx-1'>Save</h6>
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
        <ToastContainer/>
    </div>
  )
}

export default Recommended