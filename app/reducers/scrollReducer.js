/**
 * Created by avishay on 30-May-17.
 */


export default function scrollReducer (store = null, action) {
  if (action.type === 'SCROLL_TO_PLAYLIST'){
    return action.id;
  }

  return store;
}
