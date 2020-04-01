export const DEFAULT_STATE = {
  popularMovies: [],
  movieDetails: {},
  similarMovies: [],
  sortedMovies: []
};


// Actions
export const FETCH_POPULAR_MOVIES = 'movies/LOAD_LATEST_MOVIES';
const POPULAR_MOVIES_FETCHED = 'movies/POPULAR_MOVIES_FETCHED';
const SORTED_MOVIES_FETCHED = 'movies/SORTED_MOVIES_FETCHED';
export const FETCH_MOVIE_DETAILS = 'movies/FETCH_MOVIE_DETAILS';
const MOVIE_DETAILS_FETCHED = 'movies/MOVIE_DETAILS_FETCHED';
const SIMILAR_MOVIES_FETCHED = 'movies/SIMILAR_MOVIES_FETCHED';


// Action Creators
export const fetchPopularMovies = () => {
  return {type: FETCH_POPULAR_MOVIES}
};

export const popularMoviesFetched = (popularMovies) => {
  return {type: POPULAR_MOVIES_FETCHED, popularMovies}
};

export const sortedMoviesFetched = (sortedMovies) => {
  return {type: SORTED_MOVIES_FETCHED, sortedMovies}
};

export const fetchMovieDetails = (movieId) => {
  return {type: FETCH_MOVIE_DETAILS, movieId}
};

export const movieDetailsFetched = (movieDetails) => {
  return {type: MOVIE_DETAILS_FETCHED, movieDetails}
};

export const similarMoviesFetched = (similarMovies) => {
  return {type: SIMILAR_MOVIES_FETCHED, similarMovies}
};


// Reducer
export default (state, action) => {

  if (!state) {
    return DEFAULT_STATE
  }

  switch (action.type) {
    case POPULAR_MOVIES_FETCHED:
      return {
        ...state,
        popularMovies: action.popularMovies.results
      };

    case MOVIE_DETAILS_FETCHED:
      return {
        ...state,
        movieDetails: action.movieDetails
      };

    case SORTED_MOVIES_FETCHED:
      return {
        ...state,
        sortedMovies: action.sortedMovies.results
      };

    case SIMILAR_MOVIES_FETCHED:
      return {
        ...state,
        similarMovies: action.similarMovies.results
      };

    default:
      return {
        ...state
      };

  }
};


// Selectors
export const getPopularMovies = state => state.MovieReducer.popularMovies;
export const getSortedMovies = state => state.MovieReducer.sortedMovies;
