import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
   // helper method
   // goal of this method is to map over the songList array and return JSX
   renderList () {
      return this.props.songs.map((song) => {
         return (
            <div className="item" key={song.title}>
               <div className="right floated content">
                  <button className="ui button primary">
                     Select
                  </button>
               </div>
               <div className="content"> {song.title} </div>
            </div>
         );
      });
   }
   render () {
      console.log(this.props);
      // note that renderList() is called in the JSX
      return <div className="ui divided list">{this.renderList()}</div>;
   }
}

const mapStateToProps = state => {
   return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
