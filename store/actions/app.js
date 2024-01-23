import * as actionTypes from './actionTypes';

export const updateBrowserHistory = (asPath) => {
    return {
        type: actionTypes.UPDATE_BROWSER_HISTORY,
        asPath: asPath
    };
};

export const updateToast = (obj) => {

    return {
        type: actionTypes.UPDATE_TOAST_SUCCESS,
        toast: obj,
    };
};

export const updateTheme = (enable) => {
    
    return {
        type: actionTypes.UPDATE_THEME_SUCCESS,
        enable: enable
    };
};
