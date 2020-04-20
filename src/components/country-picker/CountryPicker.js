import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";

import styles from "./styles";
import { useSelector } from "react-redux";

const CountryPicker = () => {
  const { countries } = useSelector((state) => state.countries);
  console.log(countries);
  return (
    <div>
      <FormControl>
        <NativeSelect>
          <option value="global">Global</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
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
