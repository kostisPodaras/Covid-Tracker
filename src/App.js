import React, { useEffect } from "react";
import { fetchData } from "./redux/data/dataAction";
import { fetchDailyData } from "./redux/daily-data/dailyDataAction";
import { fetchCountries } from "./redux/countries/countriesAction";
import { useDispatch } from "react-redux";
import UILayout from "./UILayout";

type Props = {
  classes: Object,
};

//having this structure instead of return all the components here because when i change the theme i dont
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
