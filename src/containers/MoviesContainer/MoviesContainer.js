import React, {Component} from "react";
import {connect} from "react-redux";
import MovieListItem from "../../components/MovieListItem/MovieListItem";
import {getMovieList} from "../../ducks";
import {getReleaseDateSortingIcon, toggleSorting} from "../../ducks/SortingDuck";
import styles from "./MoviesContainer.styles";

class MoviesContainer extends Component {
  render() {
    const {movieList, toggleSorting, releaseDateSortingIcon} = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.sortContainer}>
          <div style={{backgroundColor: releaseDateSortingIcon ? 'aliceblue' : 'white', ...styles.sort}}>
            <div onClick={() => toggleSorting()}>Release Date</div>
            {releaseDateSortingIcon && <img style={styles.icon} src={releaseDateSortingIcon} alt="icon" />}
          </div>
        </div>
        {movieList.map((movie) => <MovieListItem key={movie.id} movie={movie}/>)}
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    movieList: getMovieList(state),
    releaseDateSortingIcon: getReleaseDateSortingIcon(state)
  };
}

const mapDispatchToProps = {
  toggleSorting
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
