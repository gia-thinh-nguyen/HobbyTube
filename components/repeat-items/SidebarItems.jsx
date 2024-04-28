import React,{useContext} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {Context} from '../../app/WholeContext';

const SidebarItems = ({cat}) => {
    const{setCategory,toogle,setToogle}=useContext(Context);
    const twoFunction=(category)=>{
        setToogle(!toogle);
        setCategory(category);
    }
  return (
    <Link href='/feed' onClick={()=>twoFunction(cat)} >
        <div className='flex cursor-pointer mb-[20px] gap-4' >
            <Image src={`/assets/hobbies/${cat}.png`} alt={`${cat} Icon`} width={60} height={60} unoptimized={true} priority={true}/>
            <h5 className='flex items-center'>{cat}</h5>    
        </div>
    </Link>
  )
}

export default SidebarItems