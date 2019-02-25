import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import Result from './containers/Result'
import './App.css';

var textToDisplay = "Is it Widescreen?";
var disclaimer = "(in progress-backend functionality not working yet)"

export default class App extends Component {
  render() {
    return(
      
        <div className="App">
          {textToDisplay}<br />
          <div className="Disclaimer">
             {disclaimer}
          </div>
          <SearchBar brand="MovieBox" searchText={''} />
          {Result}
        </div>
      
    );
  }
}
