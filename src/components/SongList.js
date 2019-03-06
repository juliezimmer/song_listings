import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; 

class SongList extends Component {
   // helper method
   // goal of this method is to map over the songList array and return JSX
   renderList () {
      return this.props.songs.map((song) => {
         return (
            <div className="item" key={song.title}>
               <div className="right floated content">
                  <button 
                     onClick={() => this.props.selectSong(song)}
                     className="ui button primary" > 
                     Select
                  </button>
               </div>
               <div className="content"> {song.title} </div>
            </div>
         );
      });
   }
   render () {
      // note that renderList() is called in the JSX
      return <div className="ui divided list">{this.renderList()}</div>;
   }
}

// this function is called with all of the data in the Redux store. Anytime the Redux state is changed, mapStateTpProps function runs with the newly created state object. 
// everytime the select button is clicked, this function, mapStateToProps re-runs with a new updated state object.
const mapStateToProps = state => {
   console.log(state);
   return { songs: state.songs }; 
}

export default connect(mapStateToProps, { selectSong })(SongList);
