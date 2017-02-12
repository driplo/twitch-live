    
import React, { Component } from 'react';

class LiveStream extends Component {
  
  render() {
    
    const isChannelLive = false;

    if (isChannelLive){
      return(
        <div>
          <h1>Eclypsia TV LOL</h1>
          <iframe
              src="http://player.twitch.tv/?channel=eclypsiatvlol"
              height="360"
              width="640"
              frameborder="0"
              scrolling="no"
              allowfullscreen="true">
          </iframe>
        </div>
      )
    } else {
      return (
        <div>Channel Offline here is a list of videos</div>
      )
    }
    
  
  }
    
}

export default LiveStream;