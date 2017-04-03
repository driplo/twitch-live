import React, { Component } from 'react';
import StreamList from './StreamList';
import TwitchPlayer from './TwitchPlayer';
import TwitchChat from './TwitchChat';
import { connect } from 'react-redux'

import '../style/Player.css';

class Player extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      streams: [],
      currentStream: ''
    }
  }
  
  componentWillMount(){  
    
    const thisProps = this.props
    setInterval(function(){
      updatePlayer(thisProps, thisProps.token);
    }, 10000)
    
    if (this.props.token !== ''){
      const AUTH_TOKEN = this.props.token;
      
      const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${AUTH_TOKEN}`;
      
      fetch(followedStreams)
        .then( response => { 
          return response.json(); 
        }).then(({streams}) => {
          if (streams.length > 0){
            this.props.dispatch({ type: 'RECEIVE_STREAMS', payload: streams })
            this.props.dispatch({ type: 'SWITCH_STREAM', payload: streams[0] })
          } else {
            this.setState({
              streams: streams,
              currentStream: false,
              loading: false
            });
            this.props.dispatch({ type: 'SWITCH_STREAM', payload: false });
          }
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
    }
  }  

  render() {
    return(
      <section className="Player" className={this.props.cinemaMode? 'Player Player--cinema' : 'Player'}>
        <div className="player-shadow"></div>
        <div className="player-background"></div>
        <div className="player-content">
          <div className="StreamList-container SidePlayer">
            <div className="StreamList-header">
              Followed Channels
            </div>
            <StreamList streams={this.props.streamList}/>
          </div>
          <TwitchPlayer livestream={this.props.streamId} streamInfo={this.props.streamInfo}/>
          <TwitchChat livestream={this.props.streamId}/>
        </div>
      </section>
    )
  }
}

const receiveErrorStreams = payload => ({
  type: 'STREAMS_ERROR',
  payload,
})

const receiveStreams = payload => ({
  type: 'RECEIVE_STREAMS',
  payload,
})

const updatePlayer = (props, authToken) => {
  console.log('trying to update');
  const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${authToken}`;
  fetch(followedStreams)
    .then( response => { 
      return response.json(); 
    }).then(({streams}) => {
      props.dispatch(receiveStreams(streams))
    }).catch(error => props.dispatch(receiveErrorStreams(error)))
}



export default connect(state => ({ streamId: state.streamId, streamInfo: state.streamInfo, cinemaMode: state.cinemaMode, streamList: state.streamList }))(Player);