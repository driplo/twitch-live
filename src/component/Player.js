import React, { Component } from 'react';

class Player extends Component {

  render() {

    return(
      <div className="Player">
        <div className="StreamList-container">
          <div className="StreamList-header">
            Following Channels
          </div>
          <div className="StreamList">
            <div className="stream-entry">
              
            </div>
          </div>
        </div>
        <div className="EmbedStream">
          The stream
        </div>
        <div className="TwitchChat">
          The chat
        </div>
      </div>
    )
  }

}
export default Player;