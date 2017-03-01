import React, { Component } from 'react';

class TwitchChat extends Component {

  render() {
    const URL_STREAM = `http://www.twitch.tv/${this.props.livestream}/chat`;
    if (URL_STREAM !== ''){
      return(
        <iframe 
          src={URL_STREAM}
          frameBorder="0" 
          scrolling="no" 
          id="chat_embed">
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

export default TwitchChat;