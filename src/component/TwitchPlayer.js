import React, { Component } from 'react';

class TwitchPlayer extends Component {
  
  render() {
    
    const URL_STREAM = `http://player.twitch.tv/?channel=${this.props.livestream}`;
    
    switch(this.props.livestream) {
      case '':
        return(
          <div className="empty-stream">
            <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" /><br/>
            Seems like everyone is sleeping.
          </div>
        )
      case undefined:
        return(
          <div className="empty-stream">
            <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" /><br/>
            Please log in.
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