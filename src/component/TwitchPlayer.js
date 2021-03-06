import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginButton from './Login/LoginButton';
import FollowButton from './Follow/FollowButton';

class TwitchPlayer extends Component {
  
  render() {
    
    const URL_STREAM = `https://player.twitch.tv/?channel=${this.props.currentStream.channel.name}`;
    if (this.props.connected.online){
      if (this.props.currentStream.channel.name !== ''){
        return(
          <div className="EmbedStream">
            <iframe
              src={URL_STREAM}
              frameBorder="0"
              scrolling="no"
              allowFullScreen="true">
            </iframe>
            <div className="StreamPresentation">
              <div className="stream-img">
                <img width="50" src={this.props.currentStream.channel.logo} alt={this.props.currentStream.channel.name} />
              </div>
              <div className="stream-col">
                <h1>{this.props.currentStream.channel.status}</h1>
                <div className="stream-info">
                  <a href="#">{this.props.currentStream.channel.game}</a>
                  <span>&nbsp;on&nbsp;</span>
                  <a href={this.props.currentStream.channel.url}>{this.props.currentStream.channel.name}</a>
                </div>
              </div>
              <FollowButton />
            </div>
          </div>
        )
      } else {
        return(
          <div className="EmbedStream">
            <div className="empty-stream">
              <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" />
              <p>Seems like everyone is sleeping.</p>
            </div>
          </div>
        )
      }
      
    } else {
      return(
        <div className="EmbedStream">
          <div className="empty-stream">
            <LoginButton />
          </div>
        </div>
      )
    }
    
  }
}
export default connect(state => ({ currentStream: state.currentStream, connected : state.connected }))(TwitchPlayer);