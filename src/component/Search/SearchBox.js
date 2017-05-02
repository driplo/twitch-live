import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchIcon from './SearchIcon';

class SearchBox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchList: []
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(event) {
    const AUTH_TOKEN = this.props.connected.token;
    const KEYWORD = event.target.value;
    const searchLink = `https://api.twitch.tv/kraken/search/streams?query=${KEYWORD}&oauth_token=${AUTH_TOKEN}&limit=5`;
    
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
    return(
      
      <div className="side-header__search">
        <SearchIcon />
        
        <div className={this.props.searchBoxActive? 'search-box search-box--active' : 'search-box'}>
          <input type="text" onChange={this.handleChange} className="search-box__input" placeholder="Search a live stream..." />
        
          <div className="search-box__list">
            {this.state.searchList.map((stream, i) => 
              <div className="search-box__list-entry" key={stream.channel.display_name}>
                <img width="30" src={stream.channel.logo ? stream.channel.logo : ''} alt={stream.channel.display_name} />
                {stream.channel.display_name}
                <div className="search-box__list-entry__viewers">
                  <i className="material-icons">visibility</i>&nbsp;{stream.viewers}
                </div>
              </div>
             )}
          </div>
        </div>
        
        
      </div>
    )

  }
}


export default connect(state => ({ connected : state.connected, searchBoxActive: state.searchBoxActive }))(SearchBox);

