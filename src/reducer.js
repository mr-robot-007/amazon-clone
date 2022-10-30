export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket ? basket.reduce((amount, item) => item.price + amount, 0) : 0;

// ...state means initial state and ...state.basket - current state of basket
//action. item means whatever we have actually decided to add to basket
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket:[],
      };

    case "REMOVE_FROM_BASKET":
      //find the first index of the item of item in list that matches the id of the action and return it in index
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      //if(i >=0 means that item is is basket, else we it doesn't exist in the basket)
      if (index >= 0) {
        newBasket.splice(index, 1); //it removes 1 item from that index
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
