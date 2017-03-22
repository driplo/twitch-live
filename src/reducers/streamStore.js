const streamStore = (state = { streamID : '', streamInfo: {} }, action) => {
  switch(action.type) {
    case 'SWITCH_STREAM':
      if (action.payload !== false){
        return {...state, streamId: action.payload.channel.name, streamInfo: action.payload };
      } else {
        return { ...state, streamId: false, streamInfo: {} }
      }
      
    default:
      return state
  }
}

export default streamStore