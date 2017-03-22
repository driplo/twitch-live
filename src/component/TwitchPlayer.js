import React, { Component } from 'react';
import TwitchLoginBtn from './Header/TwitchLoginBtn';

class TwitchPlayer extends Component {
  
  render() {    
    const URL_STREAM = `https://player.twitch.tv/?channel=${this.props.livestream}`;

    switch(this.props.livestream) {
      case false:
        return(
          <div className="EmbedStream">
            <div className="empty-stream">
              <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" />
              <p>Seems like everyone is sleeping.</p>
            </div>
          </div>
        )
      case undefined:
        return(
          <div className="EmbedStream">
            <div className="empty-stream">
              <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" />
              <p>Please log in.</p>
              <TwitchLoginBtn />
            </div>
          </div>
        )
      default:
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
              <img width="50" src={this.props.streamInfo.channel.logo} alt={this.props.streamInfo.channel.name} />
            </div>
            <div className="stream-col">
              <h1>{this.props.streamInfo.channel.status}</h1>
              <div className="stream-info">
                <a href="#">{this.props.streamInfo.channel.game}</a>
                <span>&nbsp;on&nbsp;</span>
                <a href={this.props.streamInfo.channel.url}>{this.props.streamInfo.channel.name}</a>
                <span className="stream-info_viewers"><i className="material-icons">visibility</i>&nbsp;{this.props.streamInfo.viewers}</span>
              </div>
            </div>
            
          </div>
        </div>
      )
    }

  }
}

export default TwitchPlayer;