const defaultState = {
  online: false,
  streamList : [],
  currentStream : {
    channel : {
      name : ''
    }
  },
  cinemaMode: false
}

const playerStore = (state = defaultState, action) => {
  switch(action.type) {
    case 'CONNECT':
      return { ...state, online: action.payload }
    case 'SWITCH_STREAM':
      if (action.payload !== false){
        return {...state, currentStream: action.payload };
      } else {
        return { ...state, currentStream: {}}
      }
    case 'TOGGLE_CINEMA':
      return { ...state, cinemaMode: !state.cinemaMode }
    case 'UPDATE_ERROR':
      return { ...state, error: action.payload }
    case 'UPDATE_PLAYER':
      return { ...state, streamList: action.payload }
    default:
      return state
  }
}



export default playerStore