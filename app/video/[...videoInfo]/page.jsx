
import React from 'react'
import PlayVideo from '../../../components/PlayVideo'
import Recommended from '../../../components/Recommended'



const page= ({params}) => {
    return (
      <div className='md:flex flex-wrap justify-between'>
          <PlayVideo videoIdProp={params.videoInfo[0]} titleProp={params.videoInfo[1]} channelIdProp={params.videoInfo[2]} channelTitleProp={params.videoInfo[3]}/>
          <div className='overflow-y-auto h-[calc(100vh-2rem)] w-[400px]'> {/* Add these classes to make Recommended scrollable */}
            <Recommended/>
          </div>
      </div>
    )
}

export default page