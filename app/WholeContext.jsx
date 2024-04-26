'use client'
import { createContext,useState,useEffect } from "react";


export const Context=createContext();

const WholeContext = (props) => {
  const[toogle,setToogle]=useState(false); 
  const[category,setCategory]=useState('basketball');
  const[videos,setVideos]=useState([]);

  const dbFetch = async () => {
    const res = await fetch(`/api/${category}`); 
    const data = await res.json();
    return data  
  }
  const setVidFetch=async()=>{
    const item=await dbFetch();
    const videos=item.videos.rows;
    const randomVideos=videos.sort(() => 0.5 - Math.random()).slice(0, 28);
    setVideos(randomVideos);
  }
  useEffect(() => {
    setVidFetch();
  }, [category])
  const value={
    toogle,
    setToogle,
    category,
    setCategory,
    videos
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export default WholeContext

