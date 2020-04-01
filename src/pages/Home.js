import React, {Component} from 'react';
import {connect} from "react-redux";

import MovieList from "../containers/MoviesContainer/MoviesContainer";
import Spinner from "../components/Spinner/Spinner";
import {fetchPopularMovies} from "../ducks/MovieDuck";

class Home extends Component {
  componentDidMount() {
    const {fetchPopularMovies} = this.props;
    fetchPopularMovies();
  }

  render() {
    const {showSpinner} = this.props;
    return (
      <div>
        {
          showSpinner ?
            <Spinner/>
            :
            <MovieList/>
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
  fetchPopularMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
