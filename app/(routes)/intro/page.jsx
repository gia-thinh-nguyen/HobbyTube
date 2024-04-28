import React from 'react'
import Link from 'next/link'
const Intro = () => {

  return (
    <div className="flex items-center justify-center h-screen">     
      <h5>This is the tutorial page</h5>
      <Link href='/sign-in'>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Get started
        </div>
      </Link>
    </div>
  )
}

export default Intro