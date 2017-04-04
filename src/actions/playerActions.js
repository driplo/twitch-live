import 'whatwg-fetch'
import { connect } from 'react-redux'

const receiveErrorStreams = payload => ({
  type: 'UPDATE_ERROR',
  payload,
})

const updatePlayer = payload => ({
  type: 'UPDATE_PLAYER',
  payload,
})

export const refreshPlayer = (props) => {
  const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${props.token}`;
  fetch(followedStreams)
    .then( response => { 
      return response.json(); 
    }).then(({streams}) => {
      props.dispatch(updatePlayer(streams))
    }).catch(error => props.dispatch(receiveErrorStreams(error)))
}

export const toggleCinema = (props) => {
  props.dispatch({ type: 'TOGGLE_CINEMA' });
}