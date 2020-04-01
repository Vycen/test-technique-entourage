import {WSConstants} from "../constants";

import WSUtils from "../utils/WSUtils";
import * as moment from "moment";

export default {

  fetchPopularMovies: () => {
    return new Promise((res, rej) => {
      fetch(WSConstants.BASE_URL + WSConstants.VERSION + WSConstants.ROUTES.MOVIE + WSConstants.ROUTES.POPULAR,
        {
          method: 'GET',
          headers: {
            "Authorization": "Bearer " + WSConstants.AUTH_TOKEN,
            ...WSConstants.HEADERS
          }
        })
        .then((response) => {
          WSUtils.handleWSResponse(response, res, rej);
        }).catch((e) => {
        rej(e)
      });
    });
  },

  fetchMoviesByReleaseDate: (order) => {
    return new Promise((res, rej) => {
      fetch(WSConstants.BASE_URL + WSConstants.VERSION + WSConstants.ROUTES.DISCOVER + WSConstants.ROUTES.MOVIE + `?sort_by=release_date.${order}&release_date.lte=${moment.now()}`,
        {
          method: 'GET',
          headers: {
            "Authorization": "Bearer " + WSConstants.AUTH_TOKEN,
            ...WSConstants.HEADERS
          }
        })
        .then((response) => {
          WSUtils.handleWSResponse(response, res, rej);
        }).catch((e) => {
        rej(e)
      });
    });
  },

  fetchMovieDetails: (movieId) => {
    return new Promise((res, rej) => {
      fetch(WSConstants.BASE_URL + WSConstants.VERSION + WSConstants.ROUTES.MOVIE + `/${movieId}`,
        {
          method: 'GET',
          headers: {
            "Authorization": "Bearer " + WSConstants.AUTH_TOKEN,
            ...WSConstants.HEADERS
          }
        })
        .then((response) => {
          WSUtils.handleWSResponse(response, res, rej);
        }).catch((e) => {
        rej(e)
      });
    });
  },

  fetchSimilarMovies: (movieId) => {
    return new Promise((res, rej) => {
      fetch(WSConstants.BASE_URL + WSConstants.VERSION + WSConstants.ROUTES.MOVIE + "/" + movieId + WSConstants.ROUTES.SIMILAR,
        {
          method: 'GET',
          headers: {
            "Authorization": "Bearer " + WSConstants.AUTH_TOKEN,
            ...WSConstants.HEADERS
          }
        })
        .then((response) => {
          WSUtils.handleWSResponse(response, res, rej);
        }).catch((e) => {
        rej(e)
      });
    });
  }

}