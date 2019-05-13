import React, { Component } from 'react';
//import { StarInfo, CastList, TrailerList, Poster, MovieList} from '../components';

//import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
//import SubTitle from '../components/SubTitle'
//import { Grid, Row, Col} from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import { fetchAspectRatioData } from '../actions';

class AspectRatio extends Component {

  componentDidMount() {
    console.log(this.props.imdb_id);
    const {dispatch} = this.props;
    dispatch(fetchAspectRatioData(this.props.imdb_id));
    
  }
  
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const {dispatch} = this.props;
    //Boolean loaded = false;
    if(nextProps.imdb_id && this.props.imdb_id !== nextProps.imdb_id) {
       //this.componentDidMount();
       //loaded = true;
       dispatch(fetchAspectRatioData(nextProps.imdb_id));
        //dispatch(fetchAspectRatioData(nextProps.movie.imdb_id));
        console.log("dispactchin': " + nextProps.imdb_id);
        //fetchAspectRatioData(this.props.imdb_id)
    }
 }


  render() {
    console.log(this.props);
    //this.mapStateToProps(AspectRatio);
    
    //const {imdb_id, aspect_ratio, isFetching_aspectRatio} = this.props;
    const {imdb_id, aspect_ratio, isFetching_aspectRatio} = this.props;
    //this.componentWillReceiveProps(this.props);
    console.log(isFetching_aspectRatio);
    //console.log(this.props.aspectRatio.isFetching);
    //if(isFetching_aspectRatio || !aspect_ratio.hasOwnProperty('aspect_ratio')) {
    //if(this.props.aspectRatio.isFetching) {
      if(isFetching_aspectRatio) {
        return <p>loading...</p>
      }
      console.log({imdb_id});
      console.log(this.props.item);
      //console.log(this.props.item.charAt(0));
      //console.log(this.props.aspectRatio.item);
      //console.log(aspect_ratio.hasOwnProperty('aspect_ratio').toString());
    //if(aspect_ratio..isNaN()) {
      //if (typeOf(aspect_ratio.aspect_ratio) == "undefined") {
        if (typeof this.props.item === 'undefined') {
      //if (this.props.item.charAt(0).isNaN()) {
        //if ({aspect_ratio}.aspect_ratio === 'undefined') {
   //if(this.props.aspectRatio.item.isNaN()) {
       console.log("NaN");
       return null;
      } else {
        //console.log({aspect_ratio});
        
        return(
          <div>hey {imdb_id} ---- </div>
        );
    }
    
  }
}

function mapStateToProps(state){
  const {aspectRatio} = state;
  
    //const {movieDetail} = state;
    //const {isFetching_movie, item: movie, error_movie} = movieDetail;
    const {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio} = aspectRatio;
    
  
    //return {isFetching_movie, movie, error_movie}
  

  return {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio};
}

export default connect(mapStateToProps)(AspectRatio);
