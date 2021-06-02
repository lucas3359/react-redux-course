import { combineReducers } from 'redux';

const songsReducer = ()=>{

    return[

      {title:'No Scrubs', duration :'2:30'},
      {title:'2No Scrubs2', duration :'2:35'},
      {title:'3No Scrubs3', duration :'2:40'},
      {title:'4No Scrubs4', duration :'3:40'}

    ];

};


const selectedSongReducer = (selectedSong = null,action)=>{

  if (action.type ==='SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong : selectedSongReducer

});
