import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

import AppReducers from './ducks';
// Saga
import rootSaga from './sagas';
import {RoutesConstants} from "./constants";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  AppReducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path={`${RoutesConstants.MOVIE}/:movieId`} component={MovieDetails}/>
            <Redirect from='*' to='/'/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}