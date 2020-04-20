import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_DAILY_COUNTRIES_SUCESS,
  FETCH_DAILY_COUNTRIES_FAILURE,
} from "./countriesType";
import { COUNTRIES_API } from "../../config";

const fetchCountriesRequest = () => ({
  type: FETCH_COUNTRIES_REQUEST,
});

const fetchCountriesSucess = (countries) => ({
  type: FETCH_DAILY_COUNTRIES_SUCESS,
  payload: countries,
});

const fetchCountriesFailure = () => ({
  type: FETCH_DAILY_COUNTRIES_FAILURE,
});

const fetchCountries = () => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    dispatch(fetchCountriesSucess);
    const request = await fetch(COUNTRIES_API);
    const { countries } = await request.json();
    dispatch(fetchCountriesSucess(countries));
  };
};

export { fetchCountries };
