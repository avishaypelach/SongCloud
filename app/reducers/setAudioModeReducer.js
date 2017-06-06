/**
 * Created by avishay on 04-Jun-17.
 */


export default function setAudioModeReducer (store = null, action) {
  if (action.type === 'CHANG_SONG_MODE'){
    return action.mode;
  }
  return store;
}
