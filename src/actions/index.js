// Action Generator 
export const selectSong = (song)  => {
   // returns an action, which is a plain JS object;
   // this action should end up in the selectedSongReducer() function.
   return  {
      type: 'SONG_SELECTED',
      payload: song
   };
};

