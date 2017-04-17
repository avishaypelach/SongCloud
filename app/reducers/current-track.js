  export default function currentTrackReducer(state = {}, action) {
  if (action.type === 'UPDATE_CURRENT_TRACK') {
    state = action.song;
  }

  return state;
}
