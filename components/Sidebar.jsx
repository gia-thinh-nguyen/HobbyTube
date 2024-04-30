'use client'
import React, { useContext } from 'react'
import {Context} from '../app/WholeContext';
import SidebarItems from './repeat-items/SidebarItems';
import { usePathname } from 'next/navigation';
import { GrClose } from "react-icons/gr";
import Link from 'next/link';
import Image from 'next/image';

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
                <div className='flex flex-col h-full'>
                    <div className='fixed pt-[50px] ml-[220px]'><GrClose size={30} onClick={toggleSidebar}/></div>
                    <div className='flex flex-col grow scale-90 pt-[30px]'>
                        <SidebarItems cat='basketball'/>
                        <SidebarItems cat='soccer'/>
                        
                        <SidebarItems cat='science'/>
                        <SidebarItems cat='programming'/>
                        <SidebarItems cat='music'/>
                        <SidebarItems cat='cooking'/>
                        <hr className='w-full h-[1px] bg-black'/>
                        <div className='flex pt-2'>
                        <Image src='/assets/custom.png' alt='Custom Icon' width={60} height={60}/>
                        <h6 className='pt-[20px] pl-4'>Customize</h6>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 scale-90'>
                        <Link href='/save' className='hover:bg-gray-500'>
                            <div className='flex '>
                            <Image src='/assets/save.png' alt='Save Icon' width={60} height={60} />
                            <h6 className='pt-[20px] pl-4'>Saved Videos</h6>
                            </div>
                            
                        </Link>
                        <Link href='/history'>
                            <div className='flex'>
                            <Image src='/assets/history.png' alt='History Icon' width={60} height={60}/>
                            <h6 className='pt-[20px] pl-4'>History</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div> 
                
        </div>
      
             
 
                
    )
}

export default Sidebar