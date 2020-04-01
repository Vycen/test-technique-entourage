import {call, put, takeEvery} from "redux-saga/effects";
import {createSagaRoot} from ".";

import {fetchMoviesByReleaseDate} from "./MovieSaga";
import {getReleaseDateSorting, sortingToggled, TOGGLE_SORTING} from "../ducks/SortingDuck";
import {select} from "@redux-saga/core/effects";
import {SortingConstants} from "../constants";

// Saga pour activer un des critères de trie, dans notre cas il n'y a que celui sur la date de sortie
function* toggleSorting() {
  try {
    const currentOrder = yield select(getReleaseDateSorting);

    let order;

    switch (currentOrder) {
      case SortingConstants.RELEASE_DATE.NONE:
        order = SortingConstants.RELEASE_DATE.DESCENDING;
        break;
      case SortingConstants.RELEASE_DATE.DESCENDING:
        order = SortingConstants.RELEASE_DATE.ASCENDING;
        break;
      case SortingConstants.RELEASE_DATE.ASCENDING:
        order = SortingConstants.RELEASE_DATE.NONE;
        break;
      default:
        break;
    }

    if (!!order) yield call(fetchMoviesByReleaseDate, order);
    yield put(sortingToggled(order));
  } catch (e) {
    console.log("Fetching latest movies error : " + e.message);
  }
}


export function* watchToggleSorting() {
  yield takeEvery(TOGGLE_SORTING, toggleSorting);
}

export default createSagaRoot(watchToggleSorting);
