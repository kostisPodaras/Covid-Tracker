import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_DAILY_COUNTRIES_SUCESS,
  FETCH_DAILY_COUNTRIES_FAILURE,
} from "./countriesType";

const initialState = {
  loading: false,
  countries: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DAILY_COUNTRIES_SUCESS:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
};

export default countriesReducer;
