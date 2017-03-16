import React, { Component } from 'react';
import StreamList from './StreamList';
import TwitchPlayer from './TwitchPlayer';
import TwitchChat from './TwitchChat';
import { connect } from 'react-redux'

class Player extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      streams: [],
      currentStream: ''
    }
  }
  
  componentWillMount(){  
        
    if (this.props.token !== ''){
      const AUTH_TOKEN = this.props.token;
      
      const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${AUTH_TOKEN}`;
      
      fetch(followedStreams)
        .then( response => { 
          return response.json(); 
        }).then(({streams}) => {
          console.log(streams);
          this.props.dispatch({ type: 'SWITCH_STREAM', payload: streams[0].channel.name });
          this.setState({
            streams: streams,
            currentStream: streams[0].channel.name,
            loading: false
          })
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
    }
  }  

  render() {

    return(
      <div className="Player">
        <div className="player-shadow"></div>
        <div className="player-background"></div>
        <div className="player-content">
          <div className="StreamList-container SidePlayer">
            <div className="StreamList-header">
              Following Channels
            </div>
            <StreamList streams={this.state.streams}/>
          </div>
          <div className="EmbedStream">
            <TwitchPlayer livestream={this.props.streamId}/>
          </div>
          <div className="TwitchChat SidePlayer">
            <TwitchChat livestream={this.props.streamId}/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ streamId: state.streamId }))(Player);