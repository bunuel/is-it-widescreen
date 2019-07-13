import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAspectRatioData } from '../actions';
import styled from 'styled-components';

class AspectRatio extends Component {

  reloaded = false;

  isItWidescreen = "maybe?";

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchAspectRatioData(this.props.imdb_id));
  }
  
  componentWillReceiveProps(nextProps) {
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
    return null;
  } else {
    this.reloaded = true;
    var firstNumber = this.props.item.split(":")[0];

    if (firstNumber > 1.78) {
      this.isItWidescreen = "YES!";
    } else {
      this.isItWidescreen = "NO!";
    }

    var the_ratio = 1.78 / firstNumber;

    var the_height = 100 * the_ratio;

    var the_margin = (100 - the_height) / 2;

    var the_width = 178;

    if (the_height > 100) {
      the_width = the_height;
      the_height = 100;
    }

    const MoviePicture =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
      width: ${the_width}px;
      height: ${the_height}px;
      background-color: #1beecb;
    `;

    return(
      <div className="aspectRatioText"><div className="aspectRatio">{this.props.item}</div>Is it widescreen? {this.isItWidescreen}<div id="tv_screen"><MoviePicture /></div></div>
    );
  }

  }
}

function mapStateToProps(state){
  const {aspectRatio} = state;
  const {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio} = aspectRatio;
  return {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio};
}

export default connect(mapStateToProps)(AspectRatio);
