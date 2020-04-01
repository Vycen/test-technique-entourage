import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchMovieDetails} from "../../ducks/MovieDuck";
import styles from './MovieDetailsContainer.styles';
import moment from "moment";
import {WSConstants} from "../../constants";

class MovieDetailsContainer extends Component {
  render() {
    const {movieDetails} = this.props;

    return (
      <div style={styles.container}>
        <div
          style={{backgroundImage: `url(${WSConstants.IMAGE_URL}/original${movieDetails.backdrop_path})`, ...styles.img}}/>
        <div style={styles.details}>
          <div style={styles.titleContainer}>
            <div style={styles.title}>{movieDetails.title}</div>
            <div style={styles.genresContainer}>
              {movieDetails.genres && movieDetails.genres.map((genre) => <div style={styles.genre}
                                                                              key={genre.id}>{genre.name}</div>)}
            </div>
          </div>
          <div style={styles.overview}>{movieDetails.overview}</div>
          <div style={styles.dateContainer}>
            <div style={styles.date}>{moment(movieDetails.release_date).format('DD/MM/YYYY')}</div>
            <div style={styles.runtime}>{movieDetails.runtime} minutes</div>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetails: state.MovieReducer.movieDetails
  };
}

const mapDispatchToProps = {
  fetchMovieDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);
