'use client'
import React, { useContext } from 'react'
import { FaBasketballBall } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";
import Link from 'next/link';
import {Context} from '../app/WholeContext';

const Sidebar = () => {
    const{category,setCategory,toogle}=useContext(Context);
    const twoFunction=(category)=>{
       
        toggleSidebar();
        setCategory(category);
    }
    return (
            <div className={toogle?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[21%] h-screen bg-slate-200 p-[40px] ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                <div className='flex flex-col pt-[100px] pl-0'>
                    <Link href='/' onClick={()=>twoFunction('basketball')}>
                    <div className={category === 'basketball'?'flex cursor-pointer mb-[20px] gap-4 underline underline-offset-8':'flex cursor-pointer mb-[20px] gap-4'}>
                        <FaBasketballBall size={28} className=''/><h5 className='flex items-center justify-center'>Basketball</h5>    
                    </div>
                    </Link>
                    <Link href='/' onClick={()=>twoFunction('soccer')}>
                        <div className={category === 'soccer'?'flex cursor-pointer mb-[20px] gap-4 underline underline-offset-8':'flex cursor-pointer mb-[20px] gap-4'}>
                            <PiSoccerBallFill size={35}/><h5 className='flex items-center justify-center'>Soccer</h5>
                        </div>
                    </Link>
                    
                </div>
            </div>      
    )
}

export default Sidebar