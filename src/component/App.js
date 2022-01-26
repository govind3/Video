import React, {useState,useEffect} from 'react'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App =()=>{
  const [selectedVideo,setSelectedVideo]=useState(null);
  const [videos,search]=useVideos('Covid 19');

  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos]);

  //setSelectedVideo(response.data.items[0]);
  
  // callback method
  // const onVideoSelect=(video)=>{   
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container" style={{marginTop:'7px'}}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}  // passing as a prop down to the VideoList  . the VideoList  in turn pass down to the VideoItem
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;