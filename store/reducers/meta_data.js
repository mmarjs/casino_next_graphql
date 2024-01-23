import * as actionTypes from '../actions/actionTypes';
const initialState = {
    title: "Ed3d",
    subTitle: null
}

const updateTitle = ( state, action ) => {

    return {
        ...state,
        title: action.title,
        subTitle: action.subTitle
    }
};
  
  
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.UPDATE_TITLE: return updateTitle( state, action );

        default: return state;
    }
};

export default reducer;