/**
 * Created by avishay on 02-Apr-17.
 */
import React from 'react';

import {
  NavLink
} from 'react-router-dom'

export default function GenreChooseComponent(props) {
  return (
    <div>
      <div className="janner-navigation-header">
        <h2 className="h2-genre-nav"> Genre: </h2>
        <ul className="janner-navigation">
          <li className="janner-navigation-li"><NavLink to="/Explore/trance" activeClassName="selected-genre"
                                                        className="janner-navigation-a"> trance </NavLink></li>
          <li className="janner-navigation-li"><NavLink to="/Explore/house" activeClassName="selected-genre"
                                                        className="janner-navigation-a"> house </NavLink></li>
          <li className="janner-navigation-li"><NavLink to="/Explore/dubstep" activeClassName="selected-genre"
                                                        className="janner-navigation-a"> dubstep </NavLink></li>
        </ul>
      </div>
      <h2 className="genre-title"> Genre: {props.genre} </h2>
    </div>
  );
}
