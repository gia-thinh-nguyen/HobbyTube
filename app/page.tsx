'use client'
import {useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import{useEffect,useContext } from "react";
import HygraphApi from "./hygraph/HygraphApi";
import {Context} from '../app/WholeContext';

export default function Home() {
  const router=useRouter();
  const{user,isLoaded}=useUser();
  const {userEmail}=useContext(Context);
  useEffect(()=>{
    if(user){
      HygraphApi.createUserEmail(userEmail);
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
