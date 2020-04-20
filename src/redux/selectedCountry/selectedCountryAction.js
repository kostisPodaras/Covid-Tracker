import { SELECT_COUNTRY } from "./selectedCountryType";

const selectCountry = (country) => {
  return {
    type: SELECT_COUNTRY,
    payload: country,
  };
};

export default selectCountry;
