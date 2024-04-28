import React,{useContext} from 'react'
import {Context} from '../../app/WholeContext';
import Image from 'next/image';
import Link from 'next/link';

const NavbarItems = ({cat,display,displayText}) => {
    const{category,setCategory}=useContext(Context);
  return display? (
    <Link href='/feed' onClick={()=>setCategory(cat)}>
        <div className={'flex flex-col justify-center items-center cursor-pointer mb-[20px] mx-5 '}>
        <Image src={`/assets/hobbies/${cat}.png`} alt={`${cat} Icon`} width={60} height={60} className='fixed' unoptimized={true} priority={true}/>
        <h6 className={category === cat && displayText?'pt-[90px] absolute':'hidden'}>{cat}</h6>    
        </div>
    </Link>
  ):null
}

export default NavbarItems