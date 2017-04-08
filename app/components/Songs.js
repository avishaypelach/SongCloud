/**
 * Created by avishay on 30-Mar-17.
 */
import React from 'react';
import Song from './Song';

export default function Songs(props) {
  return (
    <div className="genre-div">
      {props.titles.map((value) => {
        return (
          <div key={value.id}>
            <Song
              value={value}
            />
          </div>
        );
      })}
    </div>
  );
}



