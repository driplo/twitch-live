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
        
    if (this.props.token !== ''){
      const AUTH_TOKEN = this.props.token;
      
      const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${AUTH_TOKEN}`;
      
      fetch(followedStreams)
        .then( response => { 
          return response.json(); 
        }).then(({streams}) => {
          if (streams.length > 0){
            this.props.dispatch({ type: 'SWITCH_STREAM', payload: streams[0] });
            this.setState({
              streams: streams,
              currentStream: streams[0].channel.name,
              loading: false
            });
          } else {
            console.log('aucun stream');
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
      <section className="Player">
        <div className="player-shadow"></div>
        <div className="player-background"></div>
        <div className="player-content">
          <div className="StreamList-container SidePlayer">
            <div className="StreamList-header">
              Following Channels
            </div>
            <StreamList streams={this.state.streams}/>
          </div>
          <TwitchPlayer livestream={this.props.streamId} streamInfo={this.props.streamInfo}/>
          <TwitchChat livestream={this.props.streamId}/>
        </div>
      </section>
    )
  }
}

export default connect(state => ({ streamId: state.streamId, streamInfo: state.streamInfo }))(Player);