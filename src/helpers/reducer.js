export const initialState = {
    cart: [
        {
            id:"1600490069",
            title:"Learning from Data",
            price:3537.00,
            rating:5,
            image:"https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
        },
        {
            id:"1600490069",
            title:"Learning from Data",
            price:3537.00,
            rating:5,
            image:"https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
        }
    ],

    user: null,
};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };        
        
        case 'EMPTY_CART':
            return {
                ...state,
                cart: [],
            };
        
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];

            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            if (index >= 0) {
                newCart.splice(index, 1);
            }
            else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in the cart`
                );
            }
            return {
                ...state,
                cart: newCart,
             };

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        default:
            return state;
    }
}

export default reducer;