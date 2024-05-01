'use client'
import React, { useContext,useEffect,useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RiMenuFill } from "react-icons/ri";
import {Context} from '../app/WholeContext';
import NavbarItems from './repeat-items/NavbarItems';
import Modal from './Modal';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
    const{sidebar,setSidebar}=useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [hobbies,setHobbies]=useState([]);
    const allHobbies=["basketball","soccer","science","programming","music","cooking","drawing","chess"];
    const handleHobbies=(data)=>{
        setHobbies(data);
    }
    const toggleSidebar=()=>{
        setSidebar(!sidebar);
    }
    const turnOff=()=>{
        setSidebar(false);
    }
    //shadow,hide text on scroll
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
    const pathname = usePathname();
    const hide = pathname === '/sign-up' || pathname === '/sign-in'|| pathname === '/'||pathname==='/intro';
    
    
  return hide?null:(
    <div>
    <div className={shadow?'fixed w-full h-[80px] md:h-[110px] shadow-xl z-[200] md:scale-[110%] md:p-8 bg-[#ecf0f3]':'fixed w-full h-[80px] md:h-[120px] z-[100] md:scale-[110%] md:p-8 bg-[#ecf0f3]'} {...(sidebar?{onClick: turnOff}: {})}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <div className='flex justify-center items-center p-2 md:ml-5'>
                <RiMenuFill size={40} onClick={toggleSidebar} className='hover:bg-gray-400 hover:rounded-full p-2 mr-2 md:hidden' />
                <Link href='/feed' className='hidden md:flex justify-center items-center pt-[20px]'>
                    <Image src='/assets/snail.png' alt='' width={150} height={40}/>
                </Link>
                <Link href='/feed' className='flex md:hidden justify-center items-center '>
                    <Image src='/assets/logo.png' alt='' width={150} height={40}/>
                </Link>
            </div>
            <div className='hidden md:flex  max-w-[600px] w-full justify-center items-center gap-10 pt-6'>
                <Image src='/assets/hobbies/home.png' alt='Home Icon' width={60} height={60} className='cursor-pointer'/>
                {hobbies.map((hobby,index)=><NavbarItems key={index} cat={hobby} displayText={displayText}/>)}
                
            </div>
            <div className='hidden md:flex flex-row gap-5'>
                <div className='flex flex-col justify-center items-center cursor-pointer pt-[-2px] mr-2 group'  onClick={() => setShowModal(true)}>
                    <Image src='/assets/custom.png' alt='Custom Icon' width={35} height={20} className='fixed cursor-pointer mr-3'/>
                    <p className='pt-[70px] opacity-0 group-hover:opacity-100 absolute '>Customize</p>
                </div>
                
                <Link href='/save'>
                    <div className='flex flex-col justify-center items-center cursor-pointer pt-[20px] mx-5 group'>
                    <Image src='/assets/save.png' alt='Save Icon' className='fixed' width={30} height={30} />
                    <p className='pt-[70px] opacity-0 group-hover:opacity-100 absolute '>Saved Videos</p>
                    </div>
                    
                </Link>
                <Link href='/history'>
                    <div className='flex flex-col justify-center items-center cursor-pointer pt-[20px] mr-8 ml-2 group'>
                    <Image src='/assets/history.png' alt='History Icon' className='fixed' width={30} height={30}/>
                    <p className=' pt-[70px] opacity-0 group-hover:opacity-100 absolute '>History</p>
                    </div>
                </Link>
                <UserButton afterSignOutUrl='/sign-in' />
            </div>
            <div className='md:hidden'>
            <UserButton afterSignOutUrl='/sign-in' />
            </div>
        </div>
       
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal} components={allHobbies} onSelectedComponents={handleHobbies}/>
    </div>
  )
}

export default Navbar