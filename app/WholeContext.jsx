'use client'
import { createContext,useState,useEffect } from "react";
import { useUser } from '@clerk/nextjs'

export const Context=createContext();

const WholeContext = (props) => {
  const[sidebar,setSidebar]=useState(false); 
  const [category, setCategory] = useState(() => {
    // Try to get category from local storage
    const savedCategory = localStorage.getItem('category');
    return savedCategory ? savedCategory : 'basketball'; // Default to 'basketball' if no saved category
  });
  useEffect(() => {
    localStorage.setItem('category', category);
  }, [category]);
  
  const[videos,setVideos]=useState([]);
  const[profile,setProfile]=useState(false);
  const { user } = useUser();
  const userEmail=user?.primaryEmailAddress.emailAddress;
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
    sidebar,
    setSidebar,
    category,
    setCategory,
    videos,
    profile,
    setProfile,
    userEmail
  }

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export default WholeContext

