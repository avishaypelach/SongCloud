/**
 * Created by avishay on 30-Mar-17.
 */
import './songs.scss';
import React from 'react';
import Song from '../song/Song';

export default function Songs(props) {
  return (
    <div className="genre-div songs">

      {props.titles.map((value) => {
        return (
          <div key={value.id}>
            <Song
              value={value}
              mode={props.mode}
              playlists={props.playlists}
            />
          </div>
        );
      })}
    </div>
  );
}



