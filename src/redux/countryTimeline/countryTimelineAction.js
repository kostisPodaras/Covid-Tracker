import {
  FETCH_TIMELINE_REQUEST,
  FETCH_TIMELINE_SUCCESS,
} from "./countryTimelineType";

const fetchTimelineRequest = () => ({
  type: FETCH_TIMELINE_REQUEST,
});

const fetchTimelineSuccess = (data) => ({
  type: FETCH_TIMELINE_SUCCESS,
  payload: data,
});

const fetchTimeline = (api) => {
  return async (dispatch) => {
    dispatch(fetchTimelineRequest());
    const request = await fetch(api);
    const { timelineitems } = await request.json();
    dispatch(fetchTimelineSuccess(timelineitems));
  };
};

export default fetchTimeline;
