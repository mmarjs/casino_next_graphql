import * as actionTypes from './actionTypes';


export const updateTitle = (title, subTitle=null) => {

    return {
        type: actionTypes.UPDATE_TITLE,
        title: title,
        subTitle: subTitle
    };
};
