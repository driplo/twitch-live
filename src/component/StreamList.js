import React, { Component } from 'react'
import { connect } from 'react-redux'

const StreamEntry = ({onClick, stream, active, index}) => (
  <div onClick={() => onClick(index)} className={active? 'stream-entry stream-entry--active' : 'stream-entry'} title={stream.channel.status}>
    <div className="stream-img">
      <img src={stream.channel.logo} width="30" alt="stream-game" />
    </div>
    <div className="stream-column">
      <div className="streamer-name">{stream.viewers} - {stream.channel.display_name}<span className="streamer-game">{stream.channel.game}</span></div>
      <div className="streamer-title">{stream.channel.status}</div>
    </div>
  </div>
)

class StreamList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  
  handleItemClick = (index) => {
    this.setState({activeIndex: index});
    this.props.dispatch({ type: 'SWITCH_STREAM', payload: this.props.streams[index] });
  }
  
  render() {
    console.log('STREAMS PROPS STREAMLIST FROM REDUX', this.props.streamList);
    return(
      <div className="StreamList">
        {this.props.streamList.map((stream, i) =>
          <StreamEntry 
            stream={stream} 
            active={this.state.activeIndex === i}
            onClick={this.handleItemClick}
            index={i}
            key={stream.channel._id} />
         )}
      </div>
    )
  }
    
}

export default connect(state => ({streamList: state.streamList}))(StreamList);