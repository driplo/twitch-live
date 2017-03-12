import React, { Component } from 'react';

class StreamList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  
  handleItemClick(index) {
    this.setState({activeIndex: index});
    console.log(this.props.streams[index]);
  }
  
  render() {

    if (this.props.streams){
      return(
        <div className="StreamList">
          {this.props.streams.map((stream, i) =>
            <StreamEntry 
              stream={stream} 
              active={this.state.activeIndex === i}
              onClick={this.handleItemClick.bind(this, i)}
              key={stream.channel._id} />
           )}
        </div>
      )
    } else {
      return(
        <div>
          <ul>
            <li>Loading...</li>
          </ul>
        </div>
      )
    }
          
  }
    
}

const StreamEntry = ({onClick, stream, active}) => (
  <div onClick={onClick} key={stream.channel._id} data-name={name} className={active? 'stream-entry stream-entry--active' : 'stream-entry'} title={stream.channel.status}>
    <div className="stream-img">
      <img src={stream.channel.logo} width="30" alt="stream-game" />
    </div>
    <div className="stream-column">
      <div className="streamer-name">{stream.channel.display_name}<span className="streamer-game">{stream.channel.game}</span></div>
      <div className="streamer-title">{stream.channel.status}</div>
    </div>
  </div>
)

export default StreamList;