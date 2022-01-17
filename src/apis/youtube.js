import axios from 'axios';
const KEY='AIzaSyCsBhw4ymiAWAfNDcgqQKxIc5nYsF1rq68';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    type:'video',
    maxResults:5,
    key:KEY
  }
});