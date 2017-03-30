/**
 * Created by avishay on 30-Mar-17.
 */
import React from 'react';

export default function CreateSongsList(props) {
  return (
    <div className="song-card">
      <ul className="">
        {props.titles.map((value) => {
          return <div>
          <li key={value.title}><p>
            {value.title.slice(0, 30) + '...'}
          </p>
            <img src={value.artwork_url}/>
          </li>
          </div>;
        })}
      </ul>
    </div>
  );
}



