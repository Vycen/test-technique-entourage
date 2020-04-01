import React, {Component} from 'react';
import {connect} from "react-redux";

import SimilarMoviesPanel from "../containers/SimilarMoviesPanel/SimilarMoviesPanel";
import MovieDetailsContainer from "../containers/MovieDetailsContainer/MovieDetailsContainer";
import Spinner from "../components/Spinner/Spinner";
import {fetchMovieDetails} from "../ducks/MovieDuck";

class MovieDetails extends Component {

  componentDidMount() {
    const {fetchMovieDetails} = this.props;
    const {movieId} = this.props.match.params;
    fetchMovieDetails(movieId);
  }

  componentDidUpdate(prevProps, prevState) {
    const {fetchMovieDetails} = this.props;
    const movieId = this.props.match.params.movieId;
    const oldMovieId = prevProps.match.params.movieId;
    if (oldMovieId !== movieId) {
      fetchMovieDetails(movieId);
    }
  }


  render() {
    const {showSpinner} = this.props;

    return (
      <div>
        {
          showSpinner ?
            <Spinner/>
            :
            <div style={{display: 'flex', height: '100vh'}}>
              <MovieDetailsContainer/>
              <SimilarMoviesPanel/>
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showSpinner: state.SpinnerReducer.showSpinner
  };
}

const mapDispatchToProps = {
  fetchMovieDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
