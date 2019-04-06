import React, {Component} from 'react';
//import SearchBar from './SearchBar';
import { connect } from 'react-redux'

//var resultText = "Result text will be displayed here";

class Result extends Component {
  constructor(props){
    super(props);
    this.state = {
      //resultText: 'Result text will be displayed here',
      movieID: '',
      imdbID: ''
      //value: '',
      //suggestions:[]
    };
  }

  



  render(){
    //const {movieID} = this.props;
    //const {movieID} = "1560747";
    const resultStyle = {
      fontWeight: 'bold',
      //textTransform: 'capitalize',
      fontSize: '0.5em',
      visibility: 'visible'
    };

    //const {resultText} = this.state;
    //const {resultText} = "Here are your results";
    if (this.state.movieID !== '') {
      return (
      <div className="resultClass" style={resultStyle}>{this.state.movieID}</div>
      );
    } else {
      return <div className="resultClass" style={resultStyle}>???</div>;
    }
  
}
}



export default connect()(Result);