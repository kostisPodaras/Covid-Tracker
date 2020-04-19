import {
  FETCH_DAILY_DATA_REQUEST,
  FETCH_DAILY_DATA_SUCESS,
  FETCH_DAILY_DATA_FAILURE,
} from "./dailyDataType";

const initialState = {
  loading: false,
  data: [],
};

const dailyDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAILY_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DAILY_DATA_SUCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default dailyDataReducer;
