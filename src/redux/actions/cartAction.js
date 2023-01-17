import { ADDTOCART, REMOVEFROMCART } from "../types";

export const addToCart = (product, quantity) => async dispatch => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    const duplicateProduct = cart.filter(cartProduct => cartProduct.id === product.id)

    if (duplicateProduct.length === 0) {
        const productToAdd = {
            ...product,
            quantity,
            total: product.price * quantity
        }
    
        cart.push(productToAdd);
    
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: ADDTOCART,
            payload: cart
        })
    }
}

export const removeFromCart = product => async dispatch => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    const updatedCart = cart.filter(cartProduct => cartProduct.id !== product.id)

    localStorage.setItem('cart', JSON.stringify(updatedCart))
    dispatch({
        type: REMOVEFROMCART,
        payload: updatedCart
    })

}