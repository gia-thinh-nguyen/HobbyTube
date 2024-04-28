'use client'
import React, { useContext } from 'react'
import {Context} from '../app/WholeContext';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

const Profile = () => {
    const{profile,setProfile}=useContext(Context);
    const toggleProfile=()=>{
        setProfile(!profile);
    }
    const pathname = usePathname();
    const hide = pathname === '/sign-up' || pathname === '/sign-in'|| pathname === '/'||pathname==='/intro';
  return hide?null:(
    <div>
        <div className={profile ? 'fixed top-0 right-0 w-full h-screen bg-black/70 z-[20]' : ''} onClick={toggleProfile}></div>
        <div className={profile ? 'fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[35%] h-screen bg-slate-200 p-[40px] ease-in duration-500 z-[50]' : 'fixed right-[-100%] top-0 ease-in duration-500'}>
            <div className='pt-[100px]'>
            <UserButton afterSignOutUrl='/sign-in' />
            </div>
            
        </div>
        
    </div>
        
  )
}

export default Profile