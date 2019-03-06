import React from 'react';
import { connect } from 'react-redux';

// props object is destructured before being passed to SngDetail
const SongDetail = ({ song }) => {
   if (!song) {
      return <div>Select a song</div>;
   }
   return (
      <div>
         <h3>Details for:</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
      </div>
   );
};

// called with entire state object.
const mapStateToProps = (state) => {
   return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);