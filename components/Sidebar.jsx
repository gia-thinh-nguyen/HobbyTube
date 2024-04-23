'use client'
import React, { useContext } from 'react'
import { FaBasketballBall } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";
import Link from 'next/link';
import {Context} from '../app/WholeContext';

const Sidebar = () => {
    const context  = useContext(Context);
    const{category,setCategory}=useContext(Context);
    return (
            <div className={context.toogle?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[21%] h-screen bg-slate-200 p-[40px] ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                <div className='flex flex-col pt-[100px] pl-0'>
                    <Link href='/'>
                    <div className={category === 'basketball'?'flex cursor-pointer mb-[20px] gap-4 underline underline-offset-8':'flex cursor-pointer mb-[20px] gap-4'} onClick={()=>setCategory('basketball')}>
                        <FaBasketballBall size={30}/><h5>Basketball</h5>    
                    </div>
                    </Link>
                    <Link href='/'>
                        <div className={category === 'soccer'?'flex cursor-pointer mb-[20px] gap-4 underline underline-offset-8':'flex cursor-pointer mb-[20px] gap-4'} onClick={()=>setCategory('soccer')}>
                            <PiSoccerBallFill size={30}/><h5>Soccer</h5>
                        </div>
                    </Link>
                    
                </div>
            </div>      
    )
}

export default Sidebar