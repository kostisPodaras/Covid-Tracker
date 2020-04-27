import { SORT_DATA_REQUEST, SORT_DATA_SUCCESS } from "./sortingDataType";
import { SORTING_API } from "../../config";

const sortDataRequest = () => ({
  type: SORT_DATA_REQUEST,
});

const sortDataSuccess = (countries) => ({
  type: SORT_DATA_SUCCESS,
  payload: countries,
});

const sortData = (sort) => {
  return async (dispatch) => {
    dispatch(sortDataRequest());
    const request = await fetch(`${SORTING_API}${sort}`);
    const response = await request.json();
    dispatch(sortDataSuccess(response));
  };
};

export default sortData;
