import React, { Component } from 'react';
import { connect } from 'react-redux'

import TwitchLoginBtn from './Header/TwitchLoginBtn';

class TwitchPlayer extends Component {
  
  render() {
    const URL_STREAM = `https://player.twitch.tv/?channel=${this.props.currentStream.channel.name}`;
    
    if (this.props.online){
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
                  <span className="stream-info_viewers"><i className="material-icons">visibility</i>&nbsp;{this.props.currentStream.viewers}</span>
                </div>
              </div>
              
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
            <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" />
            <p>Please log in.</p>
            <TwitchLoginBtn />
          </div>
        </div>
      )
    }
    
  }
}
export default connect(state => ({ currentStream: state.currentStream, online : state.online }))(TwitchPlayer);