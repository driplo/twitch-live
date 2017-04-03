import 'whatwg-fetch'
import { connect } from 'react-redux'



const receiveErrorStreams = payload => ({
  type: 'STREAMS_ERROR',
  payload,
})

const receiveStreams = payload => ({
  type: 'RECEIVE_STREAMS',
  payload,
})

const fetchStreams = (authToken, dispatch) => {
  const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${authToken}`;
  fetch(followedStreams)
    .then( response => { 
      return response.json(); 
    }).then(({streams}) => {
      dispatch(receiveStreams(streams))
    }).catch(error => dispatch(receiveErrorStreams(error)))
}

export default connect()(fetchStreams)
