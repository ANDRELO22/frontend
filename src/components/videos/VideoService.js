import axios from "axios"

const  getVideos = async () => { 
    return await axios.get('http://localhost:4000/videos')
}
const  createVideos = async (data) => {
    return await axios.post('http://localhost:4000/videos', data)
}
const  getVideo = async (id) => { 
    return await axios.get('http://localhost:4000/video/' + id)
}
const  updateVideos = async (id,video) => { 
    return await axios.put('http://localhost:4000/videos/' + id, video)
}
const  deleteVideos = async (id) => { 
    return await axios.delete('http://localhost:4000/videos/' + id)
}
export{
    getVideos,
    createVideos,
    getVideo,
    updateVideos,
    deleteVideos
};