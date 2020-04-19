import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./dataType";

import { API } from "../../config";

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = () => ({
  type: FETCH_DATA_FAILURE,
});

const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    const request = await fetch(API);
    const fetchedData = await request.json();
    dispatch(fetchDataSuccess(fetchedData));
  };
};

export { fetchData };
