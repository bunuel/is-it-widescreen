import React, {Component} from 'react';
//import SearchBar from './SearchBar';
import { connect } from 'react-redux'

//var resultText = "Result text will be displayed here";

class Result extends Component {
  constructor(props){
    super(props);
    this.state = {
      //resultText: 'Result text will be displayed here',
      movieID: ''
      //value: '',
      //suggestions:[]
    };
  }

  

  showResult(movieID) {
    //this.state.resultText = "Result text will be displayed here " + movieID;
    this.setState({ movieID: movieID});
  }

  render(){
    const {movieID} = this.state;
  const resultStyle = {
    fontWeight: 'bold',
    //textTransform: 'capitalize',
    fontSize: '0.5em',
    visibility: 'visible'
  };

  //const {resultText} = this.state;
  const {resultText} = "Here are your results";
  if (this.state.movieID !== '') {
    return (
    <div className="resultClass" style={resultStyle}>{resultText}</div>
    );
  } else {
    return <p>loading...</p>;
  }
  
}
}

function mapStateToProps(state){
  const {movieID} = state;

  return {movieID}
}

export default connect(mapStateToProps)(Result);