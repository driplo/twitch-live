import React, { Component } from 'react';
import TwitchLoginBtn from './Header/TwitchLoginBtn';

class TwitchPlayer extends Component {
  
  render() {
    
    const URL_STREAM = `https://player.twitch.tv/?channel=${this.props.livestream}`;
    
    switch(this.props.livestream) {
      case '':
        return(
          <div className="empty-stream">
            <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" />
            <p>Seems like everyone is sleeping.</p>
          </div>
        )
      case undefined:
        return(
          <div className="empty-stream">
            <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" />
            <p>Please log in.</p>
            <TwitchLoginBtn />
          </div>
        )
      default:
      return(
        <iframe
          src={URL_STREAM}
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      )
    }

  }
}

export default TwitchPlayer;