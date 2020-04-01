import MovieReducer, {getPopularMovies, getSortedMovies} from './MovieDuck';
import SpinnerReducer from './SpinnerDuck';
import SortingReducer, {getReleaseDateSorting} from './SortingDuck';

import {combineReducers} from 'redux';

import {createSelector} from 'reselect'

export default combineReducers({
  MovieReducer,
  SpinnerReducer,
  SortingReducer
});

//Selecteurs pour récuperer la bonne liste de film à afficher sur la Home, en fonction du trie qui est appliqué
export const getMovieList = createSelector(
  [getPopularMovies, getSortedMovies, getReleaseDateSorting],
  (popularMovies, sortedMovies, releaseDateSorting) => {
    return !!releaseDateSorting ? sortedMovies : popularMovies;
  }
);
