'use client'
import React, { useContext,useEffect,useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RiMenuFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {Context} from '../app/WholeContext';
import NavbarItems from './repeat-items/NavbarItems';


const Navbar = () => {
    const{toogle,setToogle}=useContext(Context);
    
    const toggleSidebar=()=>{
        setToogle(!toogle);
    }
    //shadow,displayText on scroll
    const[shadow,setShadow]=useState(false);
    const[displayText,setDisplayText]=useState(true);
    useEffect(()=>{
        const handleShadowAndText=()=>{
            if(window.scrollY>=20){
                setShadow(true);
                setDisplayText(false);
            }
            else{
                setShadow(false);
                setDisplayText(true);
            }
        }
        window.addEventListener('scroll',handleShadowAndText);
    },[])
  return (
    <div className={shadow?'fixed w-full h-[80px] md:h-[120px] shadow-xl z-[100] md:scale-[110%] md:p-8 bg-[#ecf0f3]':'fixed w-full h-[80px] md:h-[120px] z-[100] md:scale-[110%] md:p-8 bg-[#ecf0f3]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <div className='flex justify-center items-center p-2 md:ml-5'>
                <RiMenuFill size={40} onClick={toggleSidebar} className='hover:bg-gray-400 hover:rounded-full p-2 mr-2 md:hidden' />
                <Link href='/' className='flex justify-center items-center'>
                    <Image src='/assets/logo.png' alt='' width={40} height={40} className='rounded-full' />
                    <span className=' font-bold text-xl mx-2'>HobbyTube</span>
                </Link>
            </div>
            <div className='hidden md:flex  max-w-[600px] w-full justify-center items-center gap-10 pt-10 '>
                <NavbarItems cat='basketball' display={true} displayText={displayText}/>
                <NavbarItems cat='soccer' display={true} displayText={displayText}/>
                <NavbarItems cat='rugby' display={true} displayText={displayText}/>
                <NavbarItems cat='science' display={true} displayText={displayText}/>
                <NavbarItems cat='programming' display={true} displayText={displayText}/>
            </div>
            
            <CgProfile size={50}/>
            

        </div>
    </div>
  )
}

export default Navbar