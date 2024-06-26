import React from 'react'
import PlayVideo from '../../../../components/PlayVideo'
import SaveRecom from './/../../../../components/Recommended/SaveRecom'
import VideoDescriptionSmall from '../../../../components/VideoDescriptionSmall';
import VideoDescriptionLarge from '../../../../components/VideoDescriptionLarge';


const page= async ({params}) => {
console.log(params.videoInfo)
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
            saved={true}
          />
          </div>
          <div className='overflow-y-auto h-full w-full '> 
          <VideoDescriptionSmall
            videoIdProp={params.videoInfo[0]}
            titleProp={params.videoInfo[1]}
            channelIdProp={params.videoInfo[2]}
            channelTitleProp={params.videoInfo[3]}
            thumbnailProp={decodeURIComponent(params.videoInfo.slice(4).join('/'))}
            saved={true}
          />
          <SaveRecom playingId={params.videoInfo[0]}/>
          </div>
      </div>
    )
}

export default page