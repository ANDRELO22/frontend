import React, { useState, useEffect } from 'react';
import * as VideoService from './VideoService.js';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';



export default function VideoFrom(){

    const navigate = useNavigate()
    const params = useParams()
    

    const [video, setVideo] = useState({
        title: "",
        description: "",
        url: ""
    });

    const handleInputChange = (e) => {
        console.log(video);
        
        setVideo({
            ...video, [e.target.name]: e.target.value
        });
    }


    const enviarVideo = async (event) => {
        event.preventDefault();
        if (!params.id){
         await VideoService.createVideos(video);
        toast.success('New video added');
        } else{
            await VideoService.updateVideos(params.id, video)
        }
        navigate('/');


        //console.log('ENTROOO: ', res)
        //console.log(title +  '' + description + ' ' + url)
    }
    
    const getVideo = async (id) =>{
        //console.log(setVideo)
        const res = await VideoService.getVideo(id);
        const { title, description, url } = res.data;
        setVideo({title, description, url}) 
        console.log(res)
    }

    useEffect(() => {
    if (params.id) getVideo(params.id)
    }, [])

return(
    <div>
        <form className='card-body' onSubmit={enviarVideo} >
            <h3> New video </h3>
            <div className='form-group'>
            <input type="tex" 
                name="title"
                value={video.title}
                placeholder="write a title for this video" 
                className="form-control"
                onChange={handleInputChange}  
                autoFocus />
            </div>
            <div className='form-group'>
            <input
                type='text'
                name='url'
                value={video.url}
                placeholder='https://www.youtube.com/watch?v=w39_DAZHFVA'
                className='form-control'
                onChange={handleInputChange}  
                />
                </div> 
                <div className='form-group'>
                <textarea
                    name='description'
                    rows={3}
                    value={video.description}
                    className='form-control'
                    placeholder='write a description'
                    onChange={handleInputChange}  
                ></textarea>
                </div>
                {
                    params.id ?(
                    <button className='btn btn-info'  >
                    update video
                </button>)
                :
                (<button className='btn btn-primary'  >
                    Create Video
                </button>
                )}

        </form>



    </div>
)


}
