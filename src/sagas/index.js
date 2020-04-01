import MovieSaga from "./MovieSaga";
import SortingSaga from "./SortingSaga";

import {all, fork} from "redux-saga/effects";

//Méthode pour mettre à plat toutes les méthodes des différents fichiers
export function createSagaRoot(...sagas) {
  return function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
  }
}

export default createSagaRoot(MovieSaga, SortingSaga);
