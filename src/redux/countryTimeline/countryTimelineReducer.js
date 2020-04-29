import {
  FETCH_TIMELINE_REQUEST,
  FETCH_TIMELINE_SUCCESS,
} from "./countryTimelineType";

const initialState = {
  timeline: {},
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIMELINE_REQUEST:
      return {
        ...state,
      };
    case FETCH_TIMELINE_SUCCESS:
      return {
        ...state,
        timeline: action.payload,
      };
    default:
      return state;
  }
};

export default timelineReducer;
