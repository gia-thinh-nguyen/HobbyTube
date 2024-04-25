'use client'
import React, { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaBasketballBall } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";
import { RiMenuFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {Context} from '../app/WholeContext';


const Navbar = () => {
    const{category,setCategory,toogle,setToogle}=useContext(Context);
    const toggleSidebar=()=>{
        setToogle(!toogle);
    }
  return (
    //create a youtube like navbar
    <div className='fixed w-full h-[120px] shadow-xl z-[100] md:scale-[110%] md:p-8 bg-[#ecf0f3]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            {/* //the menu icon then the logo then p tag then search bar  */}
            <div className='flex justify-center items-center p-2 md:ml-5'>
                <RiMenuFill size={40} onClick={toggleSidebar} className='hover:bg-gray-400 hover:rounded-full p-2 mr-2 md:hidden' />
                <Link href='/' className='flex justify-center items-center'>
                    <Image src='/assets/logo.png' alt='' width={40} height={40} className='rounded-full'/>
                    <span className=' tracking-widest font-bold text-xl mx-2'>HobbyTube</span>
                </Link>
            </div>
            <div className='hidden md:flex  max-w-[600px] w-full justify-center items-center gap-10 pt-10 '>
                <Link href='/' onClick={()=>setCategory('basketball')}>
                    <div className={'flex flex-col justify-center items-center cursor-pointer mb-[20px] mx-5 '}>
                    <Image src="/assets/hobbies/basketball.png" alt="Basketball Icon" width={40} height={40} className='fixed'/><h6 className={category === 'basketball'?'pt-[70px]':'hidden'}>Basketball</h6>    
                    </div>
                </Link>
                <Link href='/' onClick={()=>setCategory('soccer')}>
                    <div className={'flex flex-col justify-center items-center cursor-pointer mb-[20px] mx-5 '}>
                    <Image src="/assets/hobbies/soccer.png" alt="Basketball Icon" width={40} height={40} className='fixed' /><h6 className={category === 'soccer'?'pt-[70px]':'hidden'}>Soccer</h6>
                    </div>
                </Link>
            </div>
            
            <CgProfile size={50}/>
            

        </div>
    </div>
  )
}

export default Navbar