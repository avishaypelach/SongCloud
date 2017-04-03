/**
 * Created by avishay on 28-Mar-17.
 */
import Topbar from './Topbar'
import Player from './Player'
import React from 'react';


export default function Playlist() {
  return (
    <div className="playlist">
      <div className="side-bar-playlist">
        <div className="adding-a-playlist-btn-area">
          <button className="adding-a-playlist-btn"> Add new playlist</button>
        </div>
        <div className="playlists-names-area">
          <ul className="playlists-names">
            <li> my playlist </li>
            <li> my playlist </li>
            <li> my playlist </li>
          </ul>
        </div>

      </div>
      <div className="main-playlist">
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
    </div>
  );
};
