import { SORT_DATA_REQUEST, SORT_DATA_SUCCESS } from "./sortingDataType";

const initialState = {
  countries: [],
};

const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_DATA_REQUEST:
      return {
        ...state,
        // loading: true,
      };
    case SORT_DATA_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default sortingReducer;
