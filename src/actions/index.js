// Action Generators 
export const selectSong = (song) => {
   // returns an action, which is a plain JS object;
   return  {
      type: 'SONG_SELECTED',
      payload: song
   };
};

