'use client'
import React, { useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {Context} from '../app/WholeContext';
import SidebarItems from './repeat-items/SidebarItems';

const Sidebar = () => {
    const{category,setCategory,toogle,setToogle}=useContext(Context);
    const twoFunction=(category)=>{
        setToogle(!toogle);
        setCategory(category);
    }
    return (
            <div className={toogle?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[21%] h-screen bg-slate-200 p-[40px] ease-in duration-500' : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                <div className='flex flex-col pt-[100px] pl-0'>
                    <SidebarItems cat='basketball'/>
                    <SidebarItems cat='soccer'/>
                    <SidebarItems cat='rugby'/>
                    <SidebarItems cat='science'/>
                    <SidebarItems cat='programming'/>
                    
                </div>
            </div>      
    )
}

export default Sidebar