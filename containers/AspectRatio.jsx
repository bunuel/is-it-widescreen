import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAspectRatioData } from '../actions';

class AspectRatio extends Component {

  reloaded = false;

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchAspectRatioData(this.props.imdb_id));
    //document.getElementsByClassName("aspectRatio")[1].style = "display: none";
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
    //document.getElementsByClassName("aspectRatio")[1].style = "display: block";
    this.reloaded = true;
    return(
      <div className="aspectRatio">{this.props.item}</div>
    );
  }

  }
}

function mapStateToProps(state){
  console.log("mapping state ...");
  const {aspectRatio} = state;
  const {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio} = aspectRatio;
  return {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio};
}

export default connect(mapStateToProps)(AspectRatio);
