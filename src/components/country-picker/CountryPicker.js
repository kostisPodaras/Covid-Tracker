import React, { useEffect, useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import fetchCountry from "../../redux/selectedCountry/selectedCountryAction";
import { COUNTRIES_API } from "../../config";
import { takeCountryName } from "../../redux/selectedCountry/selectedCountryAction";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

type Props = {
  classes: Object,
};

const CountryPicker = ({ classes }: Props) => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    dispatch(takeCountryName(selectedCountry));
    dispatch(fetchCountry(`${COUNTRIES_API}/${selectedCountry}`));
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

      {/* <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
            {...params}
            label="Combo box"
            variant="outlined"
          />
        )}
      /> */}
    </div>
  );
};

export default withStyles(styles)(CountryPicker);
