const streamStore = (state = { streamID : '', streamInfo: {}, cinemaMode: false }, action) => {
  switch(action.type) {
    case 'SWITCH_STREAM':
      if (action.payload !== false){
        return {...state, streamId: action.payload.channel.name, streamInfo: action.payload };
      } else {
        return { ...state, streamId: false, streamInfo: {} }
      }
    case 'TOGGLE_CINEMA':
      return { ...state, cinemaMode: !state.cinemaMode }
    default:
      return state
  }
}

export default streamStore