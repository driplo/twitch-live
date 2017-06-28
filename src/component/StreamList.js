import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

import { connect } from 'react-redux'

import StreamEntry from './StreamEntry';

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
    const streamNow = this.props.currentStream;
    
    return(
      <Scrollbars style={{ height: 'calc(100% - 50px)' }} autoHide autoHideTimeout={500} className="StreamList">
        {this.props.streamList.map((stream, i) => 
          <StreamEntry 
            stream={stream} 
            active={stream._id === streamNow._id ? true : false}
            onClick={this.handleItemClick}
            index={i}
            key={stream.channel._id} />
         )}
      </Scrollbars>
    )
  }
    
}

export default connect(state => ({streamList: state.streamList, currentStream: state.currentStream}))(StreamList);