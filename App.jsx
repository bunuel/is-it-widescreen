import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';

var pageTitleText = "Is it Widescreen?";

var instructionsText = "start typing a movie's title and select a movie from the list that appears. If the list does not appear, try again on another browser";

export default class App extends Component {
  render() {
    return(
      
        <div className="App">
          <h1 className="pageTitle">{pageTitleText}</h1>
          <div className="instructionsText">{instructionsText}</div>
          <SearchBar brand="MovieBox" searchText={''} />
          {this.props.children}
        </div>
      
    );
  }
}
