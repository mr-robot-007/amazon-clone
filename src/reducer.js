export const initialState = {
    basket: [],
};


// ...state means initial state and ...state.basket - current state of basket
//action. item means whatever we have actually decided to add to basket
const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD_TO_BASKEt': 
            return {
                ...state,
                basket:[...state.basket,action.item],
            }
        default:
            return state;
    }
};

export default reducer;