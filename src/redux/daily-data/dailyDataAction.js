import {
  FETCH_DAILY_DATA_REQUEST,
  FETCH_DAILY_DATA_SUCESS,
  FETCH_DAILY_DATA_FAILURE,
} from "./dailyDataType";

import { DAILY_DATA_API } from "../../config";

const fetchDailyDataRequest = () => ({
  type: FETCH_DAILY_DATA_REQUEST,
});

const fetchDailyDataSuccess = (data) => ({
  type: FETCH_DAILY_DATA_SUCESS,
  payload: data,
});

const fetchDailyDataFailure = () => ({
  type: FETCH_DAILY_DATA_FAILURE,
});

const fetchDailyData = () => {
  return async (dispatch) => {
    dispatch(fetchDailyDataRequest());
    const request = await fetch(DAILY_DATA_API);
    const fetchedDailyData = await request.json();
    dispatch(fetchDailyDataSuccess(fetchedDailyData));
  };
};

export { fetchDailyData };
