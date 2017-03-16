import React, { Component } from 'react';

class TwitchChat extends Component {

  render() {
    const URL_STREAM = `http://www.twitch.tv/${this.props.livestream}/chat`;
    if (this.props.livestream !== '' && this.props.livestream !== undefined){
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
        <div></div>
      )
    }
  }
}

export default TwitchChat;