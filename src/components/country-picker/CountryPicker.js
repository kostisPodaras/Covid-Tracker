import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NativeSelect, FormControl } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

import fetchCountry, {
  takeCountryName,
} from "../../redux/selectedCountry/selectedCountryAction";
import { COUNTRIES_API } from "../../config";
import styles from "./styles";

type Props = {
  classes: Object,
};

const CountryPicker = ({ classes }: Props) => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    dispatch(takeCountryName(selectedCountry));
    if (selectedCountry) {
      dispatch(fetchCountry(`${COUNTRIES_API}/${selectedCountry}`));
    }
  }, [selectedCountry]);

  return (
    <div>
      <FormControl>
        <NativeSelect
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        >
          <option value="">Global</option>
          {countries.map((country) => (
            <option
              className={classes.option}
              key={country.name}
              value={country.name}
            >
              {country.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(CountryPicker);
