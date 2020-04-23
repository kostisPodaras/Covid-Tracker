import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import dailyDataReducer from "./daily-data/dailyDataReducer";
import countriesReducer from "./countries/countriesReducer";
import selectedCountryReducer from "./selectedCountry/selectedCountryReducer";
import uiReducer from "./UI/uiReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  dailyData: dailyDataReducer,
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  toggleNightMode: uiReducer,
});

export default rootReducer;
