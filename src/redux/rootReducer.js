import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import dailyDataReducer from "./daily-global-data/dailyDataReducer";
import countriesReducer from "./countries/countriesReducer";
import selectedCountryReducer from "./selectedCountry/selectedCountryReducer";
import uiReducer from "./UI/uiReducer";
import sortingReducer from "./sorting-data/sortingDataReducer";

const rootReducer = combineReducers({
  globalData: dataReducer,
  dailyData: dailyDataReducer,
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  toggleNightMode: uiReducer,
  dailyUpdates: sortingReducer,
});

export default rootReducer;
