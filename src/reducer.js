export const initialState ={
    cart: [],
    user:null,
};

    //SELECTOR
export const getBasketTotal = (cart) => cart?.reduce((amount,item) => item.price + amount, 0)


const reducer = (state , action) => {

    console.log(action);

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                cart:[...state.cart,action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.cart.findIndex(
                (cartItem) =>cartItem.id === action.id
            );

            let newCart = [...state.cart];
            if(index >= 0 ){
                newCart.splice(index, 1);

            } else{
                console.warn(
                    'Can not remove product (id: ${action.id} as it is not is Basket!'
                )
            }

            return{
                ...state,
                cart:newCart
            }

        default:
            return state;
    }

};

export default reducer;