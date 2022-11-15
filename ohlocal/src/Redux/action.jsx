import axios from "axios";
import * as types from "./actionType";

const GetProduct = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_DATA_REQUEST });
  return axios
    .get("https://local-api-994w.onrender.com/data")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: types.GET_PRODUCT_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCT_DATA_FAILURE });
    });
};


export { GetProduct };