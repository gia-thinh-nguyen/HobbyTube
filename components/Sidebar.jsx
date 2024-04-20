'use client'
import React, { useContext } from 'react'
import { FaBasketballBall } from "react-icons/fa";
import { PiSoccerBallFill } from "react-icons/pi";

import {Context} from '../app/WholeContext';

const Sidebar = () => {
    const context  = useContext(Context);
    return (
            <div className={context.toogle?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[20%] h-screen bg-slate-200 p-[40px] ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                <div className='flex flex-col pt-[100px] pl-0'>
                    <div className='flex cursor-pointer mb-[20px] gap-4'>
                        <FaBasketballBall size={30}/><h5>Basketball</h5>    
                    </div>
                    <div className='flex cursor-pointer mb-[20px] gap-4'>
                        <PiSoccerBallFill size={30}/><h5>Soccer</h5>
                    </div>
                </div>
            </div>      
    )
}

export default Sidebar