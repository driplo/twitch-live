const streamStore = (state = { streamId : 'gobgg' }, action) => {
  switch(action.type) {
    case 'SWITCH_STREAM':
      state.streamId = action.payload;
      return state;
    default:
      return state
  }
}

export default streamStore