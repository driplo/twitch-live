import React, { Component } from 'react';

class StreamEntry extends Component {
  
  state = {
    activeEntry : false
  }
  
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      activeEntry : true
    });
  }
    
  render() {
    let classEntry = 'stream-entry';
    if (this.state.activeEntry){
      classEntry += " stream-entry--active";
    } 
    
    const thisStream = this.props.stream;
    
    return(
      <div onClick={this.handleClick} key={thisStream.channel._id} data-name={thisStream.channel.name} className={classEntry} title={thisStream.channel.status}>
        <div className="stream-img">
          <img src={thisStream.channel.logo} width="30" alt="stream-game" />
        </div>
        <div className="stream-column">
          <div className="streamer-name">{thisStream.channel.display_name}<span className="streamer-game">{thisStream.channel.game}</span></div>
          <div className="streamer-title">{thisStream.channel.status}</div>
        </div>
      </div>
    )
  }
}

export default StreamEntry;