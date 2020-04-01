import {call, put, takeEvery} from "redux-saga/effects";
import {createSagaRoot} from ".";

import {toggleSpinner} from "../ducks/SpinnerDuck";
import {
  FETCH_MOVIE_DETAILS,
  FETCH_POPULAR_MOVIES,
  movieDetailsFetched,
  popularMoviesFetched,
  similarMoviesFetched,
  sortedMoviesFetched
} from "../ducks/MovieDuck";
import WebService from "../services/WebService";

// Saga pour récuperer les films populaires
function* fetchPopularMovies() {
  try {
    yield put(toggleSpinner(true));
    let popularMovies = yield call(WebService.fetchPopularMovies);
    yield put(popularMoviesFetched(popularMovies));
    yield put(toggleSpinner(false));
  } catch (e) {
    yield put(toggleSpinner(false));
    yield call(alert, e.status_message);
    console.log("Fetching latest movies error : ", e);
  }
}

// Saga pour récupérer les films trié par leur date de sortie (ascendant ou descendant)
export function* fetchMoviesByReleaseDate(order) {
  try {
    yield put(toggleSpinner(true));
    let sortedMovies = yield call(WebService.fetchMoviesByReleaseDate, order);
    yield put(sortedMoviesFetched(sortedMovies));
    yield put(toggleSpinner(false));
  } catch (e) {
    yield put(toggleSpinner(false));
    yield call(alert, e.status_message);
    console.log("Fetching latest movies error : ", e);
  }
}

// Saga pour récupérer les détails du film suivi des films similaires associés
function* fetchMovieDetails(action) {
  try {
    yield put(toggleSpinner(true));

    let movieDetails = yield call(WebService.fetchMovieDetails, action.movieId);
    let similarMovies = yield call(WebService.fetchSimilarMovies, action.movieId);

    yield put(movieDetailsFetched(movieDetails));
    yield put(similarMoviesFetched(similarMovies));

    yield put(toggleSpinner(false));

  } catch (e) {
    yield put(toggleSpinner(false));
    yield call(alert, e.status_message);
    console.log("Fetching movie details error : ", e);
  }
}

export function* watchFetchPopularMovies() {
  yield takeEvery(FETCH_POPULAR_MOVIES, fetchPopularMovies);
}

export function* watchFetchMovieDetails() {
  yield takeEvery(FETCH_MOVIE_DETAILS, fetchMovieDetails);
}

export default createSagaRoot(watchFetchPopularMovies, watchFetchMovieDetails);
