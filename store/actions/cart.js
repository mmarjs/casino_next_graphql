import * as actionTypes from './actionTypes';


export const updateCartItems = (items) => {
    
    return {
        type: actionTypes.UPDATE_CART_ITEMS_SUCCESS,
        items: items
    };
};
