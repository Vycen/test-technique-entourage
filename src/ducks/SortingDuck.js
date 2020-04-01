import {SortingConstants} from "../constants";
import {createSelector} from "reselect";

import up from "../icons/up.png";
import down from "../icons/down.png";

export const DEFAULT_STATE = {
  sorting: {
    releaseDate: SortingConstants.RELEASE_DATE.NONE
  }
};


// Actions
export const TOGGLE_SORTING = 'sorting/TOGGLE_SORTING';
const SORTING_TOGGLED = 'sorting/SORTING_TOGGLED';


// Action Creators
export const toggleSorting = () => {
  return {type: TOGGLE_SORTING}
};

export const sortingToggled = (order) => {
  return {type: SORTING_TOGGLED, order}
};


// Reducer
export default (state, action) => {

  if (!state) {
    return DEFAULT_STATE
  }

  switch (action.type) {

    case SORTING_TOGGLED:
      return {
        ...state,
        sorting: {
          ...state.sorting,
          releaseDate: action.order
        }
      };

    default:
      return {
        ...state
      };

  }
};


// Selectors
export const getReleaseDateSorting = state => state.SortingReducer.sorting.releaseDate;

// Selecteur permettant de renvoyer le bon picto en fonction de l'ordre du trie
export const getReleaseDateSortingIcon = createSelector(
  [getReleaseDateSorting],
  (releaseDateSorting) => {
    switch (releaseDateSorting) {
      case SortingConstants.RELEASE_DATE.NONE:
        return null;
      case SortingConstants.RELEASE_DATE.DESCENDING:
        return down;
      case SortingConstants.RELEASE_DATE.ASCENDING:
        return up;
      default:
        return null;
    }
  }
);
