import React, { Component } from 'react';
import { MoviePoster, CastList, TrailerList} from '../components';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { MovieInfo, Poster } from '../components';
import { connect } from 'react-redux';
import { fetchImdbIdData, fetchMovieDetail, fetchAspectRatioData} from '../actions';
//import Result from '../components/Result';

class MovieDetail extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchImdbIdData(this.props.params.id));
    //dispatch(fetchCastList(this.props.params.id));
    //dispatch(fetchTrailerList(this.props.params.id));
    //dispatch(fetchAspectRatioData(this.props.imdb_id))
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
     if(nextProps.params.id && this.props.params.id !== nextProps.params.id) {
         dispatch(fetchMovieDetail(nextProps.params.id));
         
      }
  }

  //shouldComponentUpdate(nextProps, nextState){
      //if(this.props.movie.id !== nextProps.movie.id) {
        //console.log('shouldComponentUpdate');
       //return true;
      //}
      //return false;
  //}

  render() {
    
    const {movie, casts, trailers, isFetcing_movie, isFetcing_casts, isFetcing_trailers} = this.props;
    return(<div>trying to render {movie.imdb_id}</div>);
    if(isFetcing_movie || isFetcing_casts || isFetcing_trailers) {
      return <p>loading...</p>
    }
    if(movie.hasOwnProperty('id')) {
      console.log(movie)
      return(
        <div>{movie.imdb_id}  </div>
      );
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {movieDetail, castList, trailerList} = state;
  const {isFetcing_movie, item: movie, error_movie} = movieDetail;
  const {isFetcing_casts, items: casts, error_casts} = castList;
  const {isFetcing_trailers, items: trailers, error_trailers} = trailerList;

  return {isFetcing_movie, movie, error_movie, isFetcing_casts, casts, error_casts, isFetcing_trailers, trailers, error_trailers}
}

export default connect(mapStateToProps)(MovieDetail);
