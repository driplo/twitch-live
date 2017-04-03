const streamStore = (state = { streamID : '', streamInfo: {}, cinemaMode: false, streamList: [] }, action) => {
  switch(action.type) {
    case 'SWITCH_STREAM':
      if (action.payload !== false){
        return {...state, streamId: action.payload.channel.name, streamInfo: action.payload };
      } else {
        return { ...state, streamId: false, streamInfo: {} }
      }
    case 'TOGGLE_CINEMA':
      return { ...state, cinemaMode: !state.cinemaMode }
    case 'STREAMS_ERROR':
      console.log('error');
      return { ...state, error: action.payload }
    case 'UPDATE_PLAYER':
      return { ...state, streamList: action.payload }
    default:
      return state
  }
}


/**** to update ****/


const defaultState = {
  streamList : [],
  currentStream : {},
  cinemaMode: false
}

const playerStore = (state = defaultState, action) => {
  switch(action.type) {
    case 'SWITCH_STREAM':
      if (action.payload !== false){
        return {...state, currentStream: action.payload };
      } else {
        return { ...state, currentStream: {}}
      }
    case 'TOGGLE_CINEMA':
      return { ...state, cinemaMode: !state.cinemaMode }
    case 'UPDATE_ERROR':
      console.log('error');
      return { ...state, error: action.payload }
    case 'UPDATE_PLAYER':
      return { ...state, streamList: action.payload }
    default:
      return state
  }
}



export default streamStore