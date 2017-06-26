import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchIcon from './SearchIcon';

class SearchBoxButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchList: []
    };
  }
  
  
  render() {
    return(
      <div className="side-header__search">
        <SearchIcon />
      </div>
    )
  }
}


export default connect(state => ({ connected : state.connected, searchBoxActive: state.searchBoxActive }))(SearchBoxButton);

