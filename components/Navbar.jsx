'use client'
import React, { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {Context} from '../app/WholeContext';


const Navbar = () => {
    const context=useContext(Context);
    const toggleSidebar=()=>{
        context.setToogle(!context.toogle);
        console.log(context.toogle);
    }
  return (
    //create a youtube like navbar
    <div className='fixed w-full h-20 shadow-xl z-[100] md:scale-[110%] md:p-8 bg-[#ecf0f3]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            {/* //the menu icon then the logo then p tag then search bar  */}
            <div className='flex justify-center items-center p-4'>
                <RiMenuFill size={30} onClick={toggleSidebar} />
                <Link href='/' className='flex justify-center items-center'>
                    <Image src='/assets/logo.jpg' alt='' width={50} height={40} className='rounded-full'/>
                    <span className=' tracking-widest font-bold text-xl mx-2'>HobbyTube</span>
                </Link>
            </div>
            <div className='hidden md:flex  max-w-[600px] justify-center items-center gap-2 '>
                <input type='text' placeholder='Search' className='w-[500px] h-[50px] rounded-2xl px-2 z-[100] shadow-lg'/>
                <button onClick={()=>handleSearch} className='rounded-s-none rounded-e-2xl relative z-[200] right-[59px] text-white w-[50px] h-[50px] flex items-center justify-center'><FaSearch size={20} className='hover:scale-[120%]' /></button>
            </div>
            
            <div className='flex gap-1'>
            <button onClick={()=>handleSearch} className='md:hidden rounded-2xl z-[200] text-white w-[50px] h-[50px] flex items-center justify-center'><FaSearch size={20} className='hover:scale-[120%]' /></button>
                <CgProfile size={50}/>
            </div>
            

        </div>
    </div>
  )
}

export default Navbar