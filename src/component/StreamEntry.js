import React from 'react';

const StreamEntry = ({onClick, stream, active, index}) => (
  <div onClick={() => onClick(index)} className={active? 'stream-entry stream-entry--active' : 'stream-entry'} title={stream.channel.status}>
    
    <div className="stream-img">
      <img src={stream.channel.logo} width="30" alt="stream-game" />
    </div>
    <div className="stream-column">
      <div className="streamer-name">{stream.channel.display_name}<span className="streamer-game">{stream.channel.game}</span></div>
      <div className="streamer-title">{stream.channel.status}</div>
      <div className="streamer-viewers"><i className="material-icons">visibility</i>&nbsp;{stream.viewers}</div>
    </div>
  </div>
)

export default StreamEntry;