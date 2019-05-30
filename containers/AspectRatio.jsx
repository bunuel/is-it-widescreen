import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAspectRatioData } from '../actions';

class AspectRatio extends Component {

  reloaded = false;

  isItWidescreen = "maybe?";

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchAspectRatioData(this.props.imdb_id));
    console.log(this.props);
  }
  
  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    const {dispatch} = this.props;
    if(nextProps.imdb_id && this.props.imdb_id !== nextProps.imdb_id) {
       dispatch(fetchAspectRatioData(nextProps.imdb_id));
    }
  }

  render() {
  const {imdb_id, aspect_ratio, isFetching_aspectRatio} = this.props;

  if (this.reloaded === true) {
    this.reloaded = false;
    return <p className="aspectRatio">loading...</p>;
  }

  if(isFetching_aspectRatio || typeof this.props.item != 'string' || this.props.item === "") {
    return <p className="aspectRatio">loading...</p>
  }

  if (typeof this.props.item === 'undefined') {
    console.log("NaN");
    return null;
  } else {
    this.reloaded = true;
    var firstNumber = this.props.item.split(":")[0];

    if (firstNumber > 1.78) {
      this.isItWidescreen = "YES!";
    } else {
      this.isItWidescreen = "NO!";
    }

    return(
      <div className="aspectRatioText"><div className="aspectRatio">{this.props.item}</div>Is it widescreen? {this.isItWidescreen}</div>
    );
  }

  }
}

function mapStateToProps(state){
  //console.log("mapping state ...");
  const {aspectRatio} = state;
  const {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio} = aspectRatio;
  return {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio};
}

export default connect(mapStateToProps)(AspectRatio);
