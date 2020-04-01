export const DEFAULT_STATE = {
  showSpinner: false
};


// Actions
const TOGGLE_SPINNER = 'spinner/TOGGLE_SPINNER';


// Action Creators
export const toggleSpinner = (visible, spinnerMsg) => {
  return {type: TOGGLE_SPINNER, visible, spinnerMsg}
};


// Reducer
export default (state, action) => {

  if (!state) {
    return DEFAULT_STATE
  }

  switch (action.type) {

    case TOGGLE_SPINNER:
      return {
        ...state,
        showSpinner: action.visible
      };

    default:
      return {
        ...state
      };

  }
};

// Selectors