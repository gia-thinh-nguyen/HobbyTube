import React from 'react'
import PlayVideo from '../../../../components/PlayVideo'
import Recommended from './/../../../../components/Recommended/Recommended'
import VideoDescriptionSmall from '../../../../components/VideoDescriptionSmall';
import VideoDescriptionLarge from '../../../../components/VideoDescriptionLarge';


const page= async ({params}) => {

    return (
      <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col'>
            <PlayVideo  videoIdProp={params.videoInfo[0]} />
          <VideoDescriptionLarge
            videoIdProp={params.videoInfo[0]} 
            titleProp={params.videoInfo[1]}
            channelIdProp={params.videoInfo[2]}
            channelTitleProp={params.videoInfo[3]}
            thumbnailProp={decodeURIComponent(params.videoInfo.slice(4).join('/'))}
            unsaveProp={false}
          />
          </div>
          <div className='overflow-y-auto h-full w-full '> 
          <VideoDescriptionSmall
            videoIdProp={params.videoInfo[0]}
            titleProp={params.videoInfo[1]}
            channelIdProp={params.videoInfo[2]}
            channelTitleProp={params.videoInfo[3]}
            thumbnailProp={decodeURIComponent(params.videoInfo.slice(4).join('/'))}
            unsaveProp={false}
          />
            <Recommended />
          </div>
      </div>
    )
}

export default page