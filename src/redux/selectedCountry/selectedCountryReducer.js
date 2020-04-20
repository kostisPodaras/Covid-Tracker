import { SELECT_COUNTRY } from "./selectedCountryType";

const initialState = {
  country: "",
};

const selectedCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default selectedCountryReducer;
