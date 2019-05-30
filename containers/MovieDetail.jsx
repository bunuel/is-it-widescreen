import React, { Component } from 'react';
import { AspectRatio} from '../containers';
import { connect } from 'react-redux';
import { fetchMovieDetail, fetchAspectRatioData} from '../actions';

class MovieDetail extends Component {

  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
     if(nextProps.params.id && this.props.params.id !== nextProps.params.id) {
         dispatch(fetchMovieDetail(nextProps.params.id));
      }
  }

  render() {
    const {movie, isFetching_movie} = this.props;

    if(isFetching_movie) {
      return <p>loading...</p>
    }
   
    if(movie.hasOwnProperty('id')) {
      //AspectRatio.props.item = null;
      
      return(
        <div><span className="movieTitle">{movie.title}</span>'s aspect ratio is... <br />
        <AspectRatio imdb_id={movie.imdb_id} item="" /> </div>
      );
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {movieDetail} = state;
  const {isFetching_movie, item: movie, error_movie} = movieDetail;

  return {isFetching_movie, movie, error_movie}
}

export default connect(mapStateToProps)(MovieDetail);
