import React, { useEffect, useState }  from 'react';
import * as VideoService  from "./VideoService";
import VideoItem from './VideosItem';
import 'bootswatch/dist/pulse/bootstrap.min.css'

const VideoList = () => {

  const [ videos, setVideos ] = useState([])

  const loadVideos = async () => {
  const res = await VideoService.getVideos()
    setVideos(res.data)
  }

  useEffect(() => {
    loadVideos()
  },[])

  return(
    <div className='row'>
      {videos.map((video) => {
        return <VideoItem video={video} key={videos.id} loadVideos={loadVideos}/>
        
      })
      }
    </div>
      
  )
}

export default VideoList