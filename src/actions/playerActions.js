import 'whatwg-fetch'

const receiveErrorStreams = payload => ({
  type: 'UPDATE_ERROR',
  payload,
})

const updatePlayer = payload => ({
  type: 'UPDATE_PLAYER',
  payload,
})

export const refreshPlayer = (props, currentStreamer) => {
  const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${props.token}`;
  fetch(followedStreams)
    .then( response => { 
      return response.json(); 
    }).then(({streams}) => {
      streams.map(function(stream){
        if (stream.channel.name === currentStreamer){
          props.dispatch({ type: 'SWITCH_STREAM', payload: stream })  
        }
        return false;
      });
      props.dispatch(updatePlayer(streams))
    }).catch(error => props.dispatch(receiveErrorStreams(error)))
}

export const toggleCinema = (props) => {
  props.dispatch({ type: 'TOGGLE_CINEMA' });
}

export const toggleSearchBox = (props) => {
  props.dispatch({ type: 'TOGGLE_SEARCHBOX' });
}