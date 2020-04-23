import { TOGGLE_NIGHT_MODE } from "./uiType";

const initialState = {
  toggleNightMode: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        toggleNightMode: !state.toggleNightMode,
      };
    default:
      return state;
  }
};
export default uiReducer;
