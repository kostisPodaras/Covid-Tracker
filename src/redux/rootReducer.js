import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import dailyDataReducer from "./daily-global-data/dailyDataReducer";
import countriesReducer from "./countries/countriesReducer";
import selectedCountryReducer from "./selectedCountry/selectedCountryReducer";
import uiReducer from "./UI/uiReducer";
import sortingReducer from "./sorting-data/sortingDataReducer";
import timelineReducer from "./countryTimeline/countryTimelineReducer";

const rootReducer = combineReducers({
  globalData: dataReducer,
  dailyData: dailyDataReducer,
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  toggleNightMode: uiReducer,
  dailyUpdates: sortingReducer,
  timeline: timelineReducer,
});

export default rootReducer;
