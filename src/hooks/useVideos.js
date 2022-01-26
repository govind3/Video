import { useEffect,useState } from 'react';
import youtube from '../apis/youtube';

// return list of output
const useVideos=(defaultSearchTerm)=>{
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    search(defaultSearchTerm);
  },[defaultSearchTerm]);

  const search= async (term)=>{
    //console.log(term);
    const response=await youtube.get("/search",{
      params: {
        q:term
      },
    });
    setVideos(response.data.items);
  };

  return [videos,search]; // return an array or return an object
}
export default useVideos;