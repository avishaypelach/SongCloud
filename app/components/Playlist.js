/**
 * Created by avishay on 05-Apr-17.
 */
import React from 'react';


import Dropdown from 'react-dropdown';
export default function Playlist(){

  return(
    <div>

      <div className="playlist-heading-area">
        <span className="playlist-name"> my songs </span>
        <div className="number-of-songs-area">
          <span className="number-of-songs"> 0 </span>
        </div>
        <button className="delete-playlist-btn"> delete</button>
      </div>
      <div className="song-card">
        <div className="img-holder">
          <img className="song-img" src="" onClick=""/>
          <i className="fa fa-play-circle-o play-btn-on-card" aria-hidden="true"> </i>
        </div>
        <div className="song-details">
          <p className="song-name"> song name </p>
          <i className="fa fa-clock-o song-length-icon" aria-hidden="true"> </i>
          <span className="song-length"> song length </span>
          <i className="fa fa-heart-o song-like" aria-hidden="true"> </i>
        </div>
      </div>

    </div>
  );
}
