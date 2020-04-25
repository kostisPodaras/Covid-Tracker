import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./dataType";

import { DATA_API } from "../../config";

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
    dispatch(fetchDataRequest);
    const request = await fetch(DATA_API);
    const { confirmed, recovered, deaths, lastUpdate } = await request.json();
    dispatch(fetchDataSuccess({ confirmed, recovered, deaths, lastUpdate }));
  };
};

export { fetchData };
