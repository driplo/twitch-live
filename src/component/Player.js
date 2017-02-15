import React, { Component } from 'react';

class Player extends Component {

  render() {

    return(
      <div className="Player">
        <div className="player-shadow"></div>
        <div className="player-background"></div>
        <div className="player-content">
          <div className="StreamList-container SidePlayer">
            <div className="StreamList-header">
              Following Channels
            </div>
            <div className="StreamList">
              <div className="stream-entry stream-entry--active">
                <div className="stream-img">
                  <img src="http://i.imgur.com/sP7hN84.png"  alt="stream-game" />
                </div>
                <div className="stream-column">
                  <div className="streamer-name">Eclypsiatvlol</div>
                  <div className="streamer-title">HIHI JBZZ L'OTP ZIGGS EN...</div>
                </div>
              </div>
              <div className="stream-entry">
                <div className="stream-img">
                  <img src="http://i.imgur.com/sP7hN84.png"  alt="stream-game" />
                </div>
                <div className="stream-column">
                  <div className="streamer-name">Eclypsiatvlol</div>
                  <div className="streamer-title">Test de longueur de description du stream</div>
                </div>
              </div>
              <div className="stream-entry">
                <div className="stream-img">
                  <img src="http://i.imgur.com/sP7hN84.png"  alt="stream-game" />
                </div>
                <div className="stream-column">
                  <div className="streamer-name">Eclypsiatvlol</div>
                  <div className="streamer-title">Lorem ipsum</div>
                </div>
              </div>
            </div>
          </div>
          <div className="EmbedStream">
            <iframe
                src="http://player.twitch.tv/?channel=eclypsiatvlol"
                frameBorder="0"
                scrolling="no"
                allowFullScreen="true">
            </iframe>
          </div>
          <div className="TwitchChat SidePlayer">
            <iframe 
              frameBorder="0" 
              scrolling="no" 
              id="chat_embed" 
              src="http://www.twitch.tv/eclypsiatvlol/chat">
            </iframe>
          </div>
        </div>
      </div>
    )
  }

}
export default Player;