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
    case 'RECEIVE_STREAMS':
      return { ...state, streamList: action.payload }
    default:
      return state
  }
}

export default streamStore