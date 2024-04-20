'use client'
import { createContext,use,useEffect,useState } from "react";
export const Context=createContext();

const WholeContext = (props) => {
  const[toogle,setToogle]=useState(false); 
  const[videos,setVideos]=useState([]);
  const fetchConfig = async () => {
    const res = await fetch("/api/config"); 
    const data = await res.json(); 
    return data    
    }; 
  const fetchData=async()=>{
    const config = await fetchConfig(); 
    const apiKey = config.myKey 
      const res=await fetch(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=30&part=snippet,status&key=${apiKey}`);
      const data=await res.json();
      setVideos(data.items);
  }
  

  useEffect(()=>{
      fetchData();
  })


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

