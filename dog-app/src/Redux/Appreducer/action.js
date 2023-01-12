//Create ActionCreator functions here

import axios from "axios";
import { GET_DOG_DATA_FAILURE, GET_DOG_DATA_REQUEST, GET_DOG_DATA_SUCCESS } from "./actionTypes";


export const getDog = () => (dispatch) => {
    dispatch({ type: GET_DOG_DATA_REQUEST });
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((r) => dispatch({ type: GET_DOG_DATA_SUCCESS, payload: r.data.message }))
      
      .catch((err) => dispatch({ type: GET_DOG_DATA_FAILURE, payload: err }));
  };
  