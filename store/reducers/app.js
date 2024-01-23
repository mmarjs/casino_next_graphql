import * as actionTypes from '../actions/actionTypes';

const initialState = {
    toast:{
      open:false
    },
    browserHistory:null,
    enableDarkMode: false
}
   

const updateBrowserHistorySuccess = ( state, action ) => {
  return {
  ...state,
  browserHistory: action.asPath
  }
};

const updateToastSuccess = ( state, action ) => {

  return {
  ...state,
  toast: action.toast
  }
};

const updateTheme = ( state, action ) => {
  return {
  ...state,
  enableDarkMode: action.enable
}
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_BROWSER_HISTORY: return updateBrowserHistorySuccess( state, action );
        case actionTypes.UPDATE_TOAST_SUCCESS: return updateToastSuccess( state, action );
        case actionTypes.UPDATE_THEME_SUCCESS: return updateTheme( state, action );
        default: return state;
    }
};

export default reducer;
