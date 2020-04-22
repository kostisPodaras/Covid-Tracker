import React, { useEffect, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import fetchCountry from "../../redux/selectedCountry/selectedCountryAction";
import { COUNTRIES_API } from "../../config";
import { takeCountryName } from "../../redux/selectedCountry/selectedCountryAction";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";

type Props = {
  classes: Object,
};

const CountryPicker = ({ classes }: Props) => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    dispatch(fetchCountry(`${COUNTRIES_API}/${selectedCountry}`));
  }, [selectedCountry]);

  return (
    <div>
      <FormControl>
        <NativeSelect
          onClick={() => dispatch(takeCountryName(selectedCountry))}
          onChange={(e) => setSelectedCountry(e.target.value)}
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

      {/* other way with better styling but lower performance */}
      {/* <Select>
          <MenuItem value="global">Global</MenuItem>
          {countries.map((country) => (
            <MenuItem key={country.name} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </Select> */}
    </div>
  );
};

export default withStyles(styles)(CountryPicker);
