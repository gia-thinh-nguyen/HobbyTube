'use client'
import {useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import{useEffect } from "react";


export default function Home() {
  const router=useRouter();
  const{user,isLoaded}=useUser();
  useEffect(()=>{
    if(user){
      router.push("/feed");
    }
    else{
      isLoaded&&router.push("/intro");
    }
  });
  return (
    <div></div>
  );
}
