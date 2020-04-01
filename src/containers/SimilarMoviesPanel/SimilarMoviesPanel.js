import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchMovieDetails} from "../../ducks/MovieDuck";
import styles from './SimilarMoviesPanel.styles';
import SmallMovieListItem from "../../components/SmallMovieListItem/SmallMovieListItem";

class SimilarMoviesPanel extends Component {
  render() {
    const {similarMovies, fetchMovieDetails} = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.title}>SIMILAR MOVIES</div>
        {similarMovies.map((movie) => <SmallMovieListItem key={movie.id} movie={movie}
                                                          selectMovie={() => fetchMovieDetails(movie.id)}/>)}
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    similarMovies: state.MovieReducer.similarMovies
  };
}

const mapDispatchToProps = {
  fetchMovieDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMoviesPanel);
