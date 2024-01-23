import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items:[],
}
  

const updateCartItems = ( state, action ) => {
  return {
    ...state,
    items: action.items
  }
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_CART_ITEMS_SUCCESS: return updateCartItems( state, action );
        default: return state;
    }
};

export default reducer;
