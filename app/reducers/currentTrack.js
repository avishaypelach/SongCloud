  export default function currentTrackReducer(state = null, action) {
  if (action.type === 'UPDATE_CURRENT_TRACK') {
    state = action.song;
  }

  return state;
}
