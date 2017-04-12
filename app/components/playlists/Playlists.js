/**
 * Created by avishay on 28-Mar-17.
 */
import './playlists.scss';
import React from 'react';

import Playlist from '../playlist/Playlist';
export default class Playlists extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <div className="playlist playlists">
        <div className="side-bar-playlist">
          <div className="adding-a-playlist-btn-area">
            <button className="adding-a-playlist-btn"> Add new playlist</button>
          </div>
          <div className="playlists-names-area">
            <ul className="playlists-names">
              <li> my playlist</li>
              <li> my playlist</li>
              <li> my playlist</li>
            </ul>
          </div>

        </div>
        <div className="main-playlist">
          <Playlist/>
        </div>
      </div>
    );
  };
}
