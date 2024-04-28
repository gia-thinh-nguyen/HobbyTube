'use client'
import React, { useContext } from 'react'
import {Context} from '../app/WholeContext';
import SidebarItems from './repeat-items/SidebarItems';
import { usePathname } from 'next/navigation';
import { GrClose } from "react-icons/gr";

const Sidebar = () => {
    const{sidebar,setSidebar}=useContext(Context);
    const toggleSidebar=()=>{
        setSidebar(!sidebar);
    }
    const pathname = usePathname();
    const hide = pathname === '/sign-up' || pathname === '/sign-in'|| pathname === '/'||pathname==='/intro';
    return hide?null:(
        <div>
            <div className={sidebar ? 'md:hidden fixed w-full h-screen top-0 left-0 bg-black/70 z-[20]' : ''} onClick={toggleSidebar}></div>
            <div className={sidebar?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[21%] h-screen bg-slate-200 p-[40px] ease-in duration-500 z-[90]' : 'fixed left-[-100%] top-0 ease-in duration-500'}>
                <div className='flex justify-end items-center pt-[60px]'><GrClose size={30} onClick={toggleSidebar}/></div>
                <div className='flex flex-col pl-0'>
                    <SidebarItems cat='basketball'/>
                    <SidebarItems cat='soccer'/>
                    <SidebarItems cat='rugby'/>
                    <SidebarItems cat='science'/>
                    <SidebarItems cat='programming'/>
                </div>
            </div> 
                
        </div>
      
             
 
                
    )
}

export default Sidebar