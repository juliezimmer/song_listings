import { combineReducers } from 'redux';

// produces a static array of songs for the user to choose.
const songsReducer = () => {
   // this returns an array of objects, with each object representing a different song
   return [
      { title: 'No Scrubs', duration: '4:05'},
      { title: "Macarena", duration: '2:30'},
      { title: 'All Star', duration: '3:15'},
      { title: 'Bittersweet Symphony', duration: '4:15'}
   ];
};

// function is called with the currently selected song as its first argument.
// the second argument is the action object
const selectedSongReducer = (selectedSong=null, action) => {
   // if the action object's type is SONG_SELECTED, then its payload property is returned, which is the song name
   if (action.type === 'SELECTED_SONG') {
      return action.payload
   }
   return selectedSong;
 };

 // by providing export default in front of this function, any other file in the application can now get access the combined set of reducers. 
export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});