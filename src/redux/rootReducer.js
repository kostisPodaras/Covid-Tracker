import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import dailyDataReducer from "./daily-data/dailyDataReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  dailyData: dailyDataReducer,
});

export default rootReducer;
