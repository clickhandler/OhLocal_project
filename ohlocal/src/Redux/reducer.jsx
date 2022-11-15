import * as types from "./actionType";
const initialState = {
  product: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: payload,
      };

    case types.GET_PRODUCT_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        product: [],
      };
    default:
      return state;
  }
};

export { reducer };
