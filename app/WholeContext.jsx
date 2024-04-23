'use client'
import { createContext,useEffect,useState } from "react";


export const Context=createContext();

const WholeContext = (props) => {
  const[toogle,setToogle]=useState(false); 
  const[videos,setVideos]=useState([]);
  const[category,setCategory]=useState('basketball'); //['basketball','soccer'

  const dbFetch = async () => {
    const res = await fetch(`scripts/${category}`); 
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
    videos,
    category,
    setCategory
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export default WholeContext

