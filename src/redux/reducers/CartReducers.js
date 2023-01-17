import { ADDTOCART, REMOVEFROMCART } from "../types"


const initiaState = {
    cart: []
}

if(localStorage.getItem('cart')) {
    initiaState.cart = JSON.parse(localStorage.getItem('cart'))
}else {
    initiaState.cart = []
}

const cartReducer = (state= initiaState, action) => {
    switch(action.type) {
        case ADDTOCART:
            return{
                cart: [...action.payload]
            }
        case REMOVEFROMCART:
            return{
                cart: [...action.payload]
            }
        default:
            return state
    }
}

export default cartReducer