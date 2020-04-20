import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import dailyDataReducer from "./daily-data/dailyDataReducer";
import countriesReducer from "./countries/countriesReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  dailyData: dailyDataReducer,
  countries: countriesReducer,
});

export default rootReducer;
