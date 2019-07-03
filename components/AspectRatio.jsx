import React from 'react'
import { fetchAspectRatioData} from '../actions';

export default function AspectRatio(props){
  
 console.log("movie " + props.imdb_id);
 const {dispatch} = this.props;
    
       //this.componentDidMount();
        //dispatch(fetchMovieDetail(nextProps.params.id));
    dispatch(fetchAspectRatioData(props.imdb_id));

    const {aspect_ratio, isFetching_aspectRatio} = this.props;

    if(isFetching_aspectRatio) {
        return <p>loading...</p>
      }
    if(aspect_ratio.hasOwnProperty('aspect_ratio')) {
      return(
        <div>{aspect_ratio.aspect_ratio}</div>
      );
    } else
      return null;

  //return(
    //<h1> aspect ratio {props.imdb_id} {this.props.aspect_ratio}</h1>
  //);
}
