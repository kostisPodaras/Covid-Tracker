import { combineReducers } from "redux";

import dataReducer from "./data/dataReducer";
import dailyDataReducer from "./daily-data/dailyDataReducer";
import countriesReducer from "./countries/countriesReducer";
import selectedCountryReducer from "./selectedCountry/selectedCountryReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  dailyData: dailyDataReducer,
  countries: countriesReducer,
  selectedCountry: selectedCountryReducer,
});

export default rootReducer;
