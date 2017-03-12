import React, { Component } from 'react';

class TwitchPlayer extends Component {
  
  render() {
    
    const URL_STREAM = `http://player.twitch.tv/?autoplay=false&channel=${this.props.livestream}`;

    if (this.props.livestream !== ''){
      return(
        <iframe
          src={URL_STREAM}
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      )
    } else {
      return(
        <div className="empty-stream">
          <img src="https://web-cdn.ttvnw.net/images/xarth/dead_glitch.png" alt="Offline" /><br/>
          Seems like everyone is sleeping.
        </div>
      )
    }

  }
}

export default TwitchPlayer;