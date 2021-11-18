import actionTypes from "./actionTypes";

export const addItemToCart=(productId)=>({
    type: actionTypes.ADD_TO_CART,
    payload: productId
});

export const removeCartItem = (productId)=>({
    type:actionTypes.REMOVE_CART_ITEM,
    payload:productId
});

export const emptyCart = () =>({
    type:actionTypes.EMPTY_CART
});

export const increaseItemQty =(productId)=>({
    type:actionTypes.INCREMENT_ITEM_QTY,
    payload:productId
});

export const decreaseItemQty = (productId)=>({
    type:actionTypes.DECREMENT_ITEM_QTY,
    payload:productId
});

export const confirmOrder = ()=>({
    type:actionTypes.CONFIRM_ORDER
})