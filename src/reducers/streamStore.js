const defaultState = {
  connected : {
    online: false,
    token: '',
    remember: false
  },
  streamList : [],
  currentStream : {
    channel : {
      name : ''
    }
  },
  cinemaMode: false,
  searchBoxActive: false
}

const playerStore = (state = defaultState, action) => {
  switch(action.type) {
    case 'CONNECT':
      return { ...state, connected:{ online: action.payload.online, token: action.payload.token, remember: action.payload.remember }  }
    case 'SWITCH_STREAM':
      if (action.payload !== false){
        return {...state, currentStream: action.payload };
      } else {
        return { ...state}
      }
    case 'TOGGLE_CINEMA':
      return { ...state, cinemaMode: !state.cinemaMode }
    case 'TOGGLE_SEARCHBOX':
      return { ...state, searchBoxActive: !state.searchBoxActive }
    case 'UPDATE_ERROR':
      return { ...state, error: action.payload }
    case 'UPDATE_PLAYER':
      return { ...state, streamList: action.payload }
    default:
      return state
  }
}

export default playerStore