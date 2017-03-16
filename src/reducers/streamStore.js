const streamStore = (state = { streamID : '' }, action) => {
  switch(action.type) {
    case 'SWITCH_STREAM':
      return {...state, streamId: action.payload };
    default:
      return state
  }
}

export default streamStore