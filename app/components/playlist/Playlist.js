/**
 * Created by avishay on 08-Apr-17.
 */
/**
 * Created by avishay on 05-Apr-17.
 */
import './playlist.scss';
import React from 'react';
import Songs from '../songs/Songs';

import Dropdown from 'react-dropdown';
export default function Playlist(props){

  return(
    <div className="playlist">
      <div className="playlist-heading-area">
        <span className="playlist-name"> {props.playlist.name} </span>
        <div className="number-of-songs-area">
          <span className="number-of-songs"> {props.playlist.songs.length} </span>
        </div>
        <button className="delete-playlist-btn"> delete </button>
      </div>
      <Songs
        titles={props.playlist.songs}
        mode={' '}
      />
    </div>
  );
}
