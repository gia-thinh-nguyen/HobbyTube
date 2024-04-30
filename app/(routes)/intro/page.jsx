import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Intro = () => {

  return (
    <div className="relativeflex items-center justify-center h-screen">     
      <Image src='/assets/feed.png' alt='' className='w-full h-full' width={1000} height={500}/>
      <Link href='/sign-in'>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          Get started
        </div>
      </Link>
    </div>
  )
}

export default Intro