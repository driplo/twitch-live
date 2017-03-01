import React, { Component } from 'react';

class TwitchPlayer extends Component {

  render() {
    const URL_STREAM = `http://player.twitch.tv/?channel=${this.props.livestream}`;
    if (URL_STREAM !== ''){
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
        <div>
          Loading or no one live...
        </div>
      )
    }
  }
}

export default TwitchPlayer;