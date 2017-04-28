import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchDiv extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchList: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
    console.log(event);
  }
  
  handleChange(event) {
    const AUTH_TOKEN = this.props.connected.token;
    const KEYWORD = event.target.value;
    const searchLink = `https://api.twitch.tv/kraken/search/streams?query=${KEYWORD}&oauth_token=${AUTH_TOKEN}`;
    
    if (KEYWORD.length > 2){
      fetch(searchLink)
        .then( response => { 
          return response.json(); 
        }).then(({streams}) => {
          this.setState({
            searchList : streams
          });
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
    } else {
      this.setState({
        searchList : []
      })
    }
  }
  
  render() {
    console.log(this.state.value);
    return(
      <div>
        <div>
          <input type="text" className="search-box__input" placeholder="Search a live stream..." />
        </div>
        
        <form>
          <div>
            <input type="text" onChange={this.handleChange} />
          </div>
        </form>
        
        <ul>
          {this.state.searchList.map((stream, i) => 
            <li key={stream.channel.display_name}>{stream.channel.display_name} {stream.channel.status}</li>
           )}
        </ul>
        
      </div>
    )

  }
}


export default connect(state => ({ connected : state.connected }))(SearchDiv);

