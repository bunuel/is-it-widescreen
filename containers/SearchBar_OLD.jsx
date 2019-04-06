import React, {Component} from 'react'
import { Navbar, FormGroup, FormControl, Button, Image, Row, Col } from 'react-bootstrap/lib'
import TMDBlogo from '../images/themoviedb_green.svg'
import logo from '../images/logo_square.svg'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Autosuggest from 'react-autosuggest'
import theme from './search.css'
import { URL_SEARCH, API_KEY_ALT, URL_IMG, IMG_SIZE_XSMALL, URL_DETAIL, IMDB_ID_CONST, API_KEY} from '../const';
import {Result} from './Result';
import { fetchImdbIdData } from '../actions';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      suggestions:[]
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  handleKeyDown = (event) => {
    if(event.key == 'Enter') {
      return this.handleSubmit(this.state.value);
    }
  }

  handleSubmit = (searchText) => {
    this.props.dispatch(push('/search/'+ searchText));
    this.setState({ value: ''});
  }


  getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  onSuggestionsFetchRequested = ({ value }) => {
      const trimmedValue = value.trim();

      if (trimmedValue.length > 0) {
          let url = URL_SEARCH + trimmedValue + API_KEY_ALT;
            fetch(url)
              .then(response => response.json())
              .then(json => json.results)
              .then(data => {
                const results = data.map(movie => {
                  let temp = {}
                  temp.id = movie.id
                  temp.title = movie.title
                  temp.img = movie.poster_path
                  temp.year = (movie.release_date == "") ? "0000" : movie.release_date.substring(0,4)
                  return temp
                });
                this.setState({
                 suggestions: results
                });
              }).catch(error => console.log('Exception to get Suggestions'))
      }
      else {
        this.setState({
          suggestions: []
        })
      }
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderSuggestion = (suggestion) => {
    return (
      <a>
      <img className="searchResult-image" src= {suggestion.img == null ? logo: URL_IMG+IMG_SIZE_XSMALL+suggestion.img } />
        <div className="searchResult-text">
          <div className="searchResult-name">
            {suggestion.title}
          </div>
          <div className="searchResult-year">
          {suggestion.year}
          </div>
          
        </div>
      </a>
    );
  };

  onSuggestionSelected = (event, { suggestion, method }) => {
    console.log(suggestion.id);
    document.getElementsByClassName("resultClass")[0].innerHTML = suggestion.id;

    //console.log(fetchImdbIdData(suggestion.id));

    const {dispatch} = this.props;
    //const imdbId = dispatch(fetchImdbIdData(suggestion.id));
    dispatch(fetchImdbIdData(suggestion.id));
    Result.setState({movieID:suggestion.id});
    console.log(this.state);
    this.setState({ value: ''});
    

    //ReactDOM.render(<Result searchText={''} />, div);
    //if (method === 'enter') {


      //event.preventDefault();
      //resultText = 
    //this.props.dispatch(push('/movie/'+ suggestion.id));
    //Result.showResult(suggestion.id);
    //this.props.Result.showResult(suggestion.id);
    //console.log(suggestion.id);
    //Result.setState(suggestion.id);

    //dispatch(Result);
    //Result.render();
    //Result.
    //this.setState({ value: ''});
    //}
  };

  render(){
  const brandStyle = {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    
    fontSize: '0.5em'
  };

  const imgStyle = {
    height: '50%',
    width: 'auto',
    
    marginTop: '-8px',
    display: 'inline-block'
  };

  const {value, suggestions} = this.state;
  const inputProps = {
    value,
    onChange: this.onChange,
    onKeyPress: this.handleKeyDown,
    placeholder: 'Search Movie Title...'
  };

  return (
    <Navbar bsStyle='inverse'>
      
      <Navbar.Form pullRight>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps} />
      </Navbar.Form>
      <Navbar.Brand>
          <a href="#"><span style={brandStyle}>{this.props.brand}</span><Image style={imgStyle} src={TMDBlogo}/></a>
      </Navbar.Brand>
    </Navbar>
  );

  }
}

export default connect()(SearchBar);
