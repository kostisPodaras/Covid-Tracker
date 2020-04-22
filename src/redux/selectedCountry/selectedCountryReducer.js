import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCESS,
  FETCH_COUNTRY_FAILURE,
} from "./selectedCountryType";

const initialState = {
  country: {},
};

const selectedCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
      };
    case FETCH_COUNTRY_SUCESS:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default selectedCountryReducer;
