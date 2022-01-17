import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component{

  state={videos:[],selectedVideo:null};

  componentDidMount(){
    this.onTermSubmit('COVID 19')
  }

  onTermSubmit= async (term)=>{
    console.log(term);
    const response=await youtube.get('/search',{
      params: {
        q:term
      }
    });
    //console.log(response);
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]   // default video on screen
    });

  };

  onVideoSelect=(video)=>{   // callback method
    this.setState({selectedVideo:video});
  };

  render(){
    return (
      <div className='ui container' style={{marginTop:'15px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='six wide column'>
              <VideoList 
                onVideoSelect={this.onVideoSelect} // passing as a prop down to the VideoList  . the VideoList  in turn pass down to the VideoItem
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;