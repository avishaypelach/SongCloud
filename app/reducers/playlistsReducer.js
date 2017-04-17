/**
 * Created by avishay on 12-Apr-17.
 */
export default function playlistsReducer(state = {}, action) {
  if (action.type === 'CREATE_NEW') {

    state[action.name] = []

  } else if (action.type === 'ADD_SONG_TO_PLAYLIST') {


  } else if (action.type === 'DELETE_PLAYLIST') {


  } else if (action.type === 'RENAME_PLAYLYS') {

  }

  return state;
}
