'use client'
import { createContext,use,useEffect,useState } from "react";


export const Context=createContext();

const WholeContext = (props) => {
  const[toogle,setToogle]=useState(false); 
  const[videos,setVideos]=useState([]);

  
  const dbFetch = async () => {
    const res = await fetch("scripts/basketball"); 
    const data = await res.json();
    return data  
  }

  const setVidFetch=async()=>{
    const item=await dbFetch();
    setVideos(item.videos.rows);
  }
  useEffect(() => {
    setVidFetch();
  }, [])


  const value={
    toogle,
    setToogle,
    videos
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export default WholeContext

