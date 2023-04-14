import { cartActions } from "../action.type";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.SET_CART:
      let getProductById = false
      const newState = state.products.map((prod) => {
        if (prod.id === action.payload.id) {
          prod.quantity += 1
          getProductById = true
        }
        return prod
      })
      return {
        ...state,
        products: state.products?.length
          ?
          getProductById ? [...newState] : [...state.products, { ...action.payload, quantity: 1 }]
          : [{ ...action.payload, quantity: 1 }],
      };
    case cartActions.DELETE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((prod) => prod.id !== action.payload)
      };
    case cartActions.DELETE_ALL_FROM_CART:
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
};
