import React from "react";
import ReactPlayer from 'react-player'
import './VideosEd.css'
import {useNavigate} from 'react-router-dom'
import * as VideoService from './VideoService'

const VideoItem = ({video, loadVideos}) => {

    const navigate = useNavigate()

    const handelete = async (id) =>{
        await VideoService.deleteVideos(id)
        loadVideos();
    }
    return (
        <div className="col-md-4">
            <div 
            className="card card-body videos-card" 
            style={{cursor: 'pointer'}} >
            <div className="d-flex justify-content-between">
            <h1
            onClick={()=> navigate(`update/${video._id}`,{replace: true}) }
            
            >{video.title}</h1>
            <div>
            <samp className="text-danger" onClick={() => video._id && handelete(video._id)} >
                x
            </samp>
            </div>
            </div>
            <p>{video.description}</p>
            <div className="embed-responsive embed-responsive-16by9">
            <ReactPlayer url={video.url} width="100%" heitgh="100%"/>
            </div>
         
            </div>
        </div>
    )
}
export default VideoItem