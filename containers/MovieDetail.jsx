import React, { Component } from 'react';
//import { AspectRatio} from '../components';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { MovieInfo, Poster } from '../components';
import { AspectRatio} from '../containers';
import { connect } from 'react-redux';
import { fetchImdbIdData, fetchMovieDetail, fetchAspectRatioData} from '../actions';
//import Result from '../components/Result';

class MovieDetail extends Component {

  componentDidMount() {
    //const {dispatch} = this.props;
    //dispatch(fetchImdbIdData(this.props.params.id));

    //setTimeout( function(){
      //dispatch(fetchAspectRatioData(this.props.imdb_id));
    //}, 9000 );
    //dispatch(fetchCastList(this.props.params.id));
    //dispatch(fetchTrailerList(this.props.params.id));
    //console.log("dispactchin': " + this.props.params.id);
    
      //setTimeout( function(){
        //dispatch(fetchAspectRatioData(dispatch.imdb_id))
      //}, 500 );

    
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
     if(nextProps.params.id && this.props.params.id !== nextProps.params.id) {
        //this.componentDidMount();
         dispatch(fetchMovieDetail(nextProps.params.id));
         //dispatch(fetchAspectRatioData(nextProps.movie.imdb_id));
         //console.log("dispactchin': " + nextProps.movie.imdb_id);
         //fetchAspectRatioData(this.props.imdb_id)
         
      }
  }

  render() {
    
    const {movie, isFetching_movie} = this.props;
    //return(<div>trying to render {movie.imdb_id}</div>);
    if(isFetching_movie) {
      return <p>loading...</p>
    }
    //if(movie.hasOwnProperty('id') && movie.hasOwnProperty('aspect_ratio')) {
      if(movie.hasOwnProperty('id')) {
      //const {aspect_ratio} = 'ASPECT_RATIO';
      //var {aspect_ratio} = "ASPECT_RATIO";
      //aspect_ratio = JSON.parse(this.aspectRatio(movie.imdb_id));
      //const {dispatch} = movie;
    //dispatch(fetchImdbIdData(this.props.params.id));
    //dispatch(fetchCastList(this.props.params.id));
    //dispatch(fetchTrailerList(this.props.params.id));
    //console.log("dispactchin': " + imdb_id);
    //const aspect_ratio = setTimeout( function(){
     // const {dispatch} = this.props;
      //dispatch(fetchAspectRatioData(movie.imdb_id));
      //this.getAspectRatio(movie.imdb_id);
      console.log(movie);

      //const {dispatch} = this.props;
    
       //this.componentDidMount();
        //dispatch(fetchMovieDetail(nextProps.params.id));
        //dispatch(fetchAspectRatioData(movie.imdb_id));
      //while (typeof(dispatch.aspect_ratio) == 'undefined') {
        //setTimeout(() => {console.log("getting aspect ratio")}, 3000);
        //console.log("getting aspect ratio");  
        //setTimeout(console.log("gettting aspect ratio"), "3000" )
      //}

      //if (!isFetching_aspectRatio) {
      //console.log(aspect_ratio.aspect_ratio);
      //console.log(JSON.parse({aspect_ratio}));
      // test to make sure aspect_ratio is defined before moving on
      return(
        <AspectRatio imdb_id={movie.imdb_id} /> 
        //<div>{movie.imdb_id}   {this.props.aspect_ratio}</div>
      );
      //} else {
        //return <p>loading...</p>
     // }
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {movieDetail} = state;
  const {isFetching_movie, item: movie, error_movie} = movieDetail;
  //const {isFetching_aspectRatio, item: aspect_ratio, error_aspectRatio} = aspectRatio;
  

  return {isFetching_movie, movie, error_movie}
}

export default connect(mapStateToProps)(MovieDetail);
