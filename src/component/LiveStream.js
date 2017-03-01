    
import React, { Component } from 'react';

class LiveStream extends Component {
  
  render() {
    
    
    
    return(
      <div>
        <h1>Eclypsia TV LOL</h1>
        <iframe
            src="http://player.twitch.tv/?channel=eclypsiatvlolzz"
            height="360"
            width="640"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
        </iframe>
      </div>
    )    
  
  }
    
}

export default LiveStream;