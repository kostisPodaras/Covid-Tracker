import {
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCESS,
  FETCH_COUNTRY_FAILURE,
} from "./selectedCountryType";

const fetchCountryRequest = () => ({
  type: FETCH_COUNTRY_REQUEST,
});

const fetchCountrySucess = (country) => ({
  type: FETCH_COUNTRY_SUCESS,
  payload: country,
});

const fetchCountryFailure = () => ({
  type: FETCH_COUNTRY_FAILURE,
});

const takeCountryName = (name) => ({
  type: "TAKE_COUNTRY_NAME",
  payload: name,
});

const fetchCountry = (api) => {
  return async (dispatch) => {
    dispatch(fetchCountryRequest());
    const request = await fetch(api);
    const response = await request.json();
    dispatch(fetchCountrySucess(response));
  };
};
export { takeCountryName };
export default fetchCountry;
