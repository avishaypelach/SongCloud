/**
 * Created by avishay on 30-Mar-17.
 */
import './songs.scss';
import React from 'react';
import Song from '../song/Song';
import uuid from 'uuid';

export default function Songs(props) {
  return (
    <div className="genre-div songs">
      {props.songs.map((value) => {
        return (
          <div key={uuid()}>
            <Song
              {...props}
              song={value}
              mode={props.mode}
            />
          </div>
        );
      })}
    </div>
  );
}



