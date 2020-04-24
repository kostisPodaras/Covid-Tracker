import React, { useEffect } from "react";
import { fetchData } from "./redux/data/dataAction";
import { fetchDailyData } from "./redux/daily-data/dailyDataAction";
import { fetchCountries } from "./redux/countries/countriesAction";
import { useDispatch, useSelector } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import UILayout from "./UILayout";

type Props = {
  classes: Object,
};

//having this structure instead of return (<header> etc) because when i change the theme i dont
//want fetching happen with each render
const App = ({ classes }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchDailyData());
    dispatch(fetchCountries());
  }, []);

  return <UILayout />;
};

export default App;
