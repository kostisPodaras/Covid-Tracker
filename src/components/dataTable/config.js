const defaultSorting = "cases";
const headerRow = [
  "Country",
  "Total Cases",
  "New Cases",
  "Deaths",
  "New Deaths",
  "Recovered",
  "Active Cases",
  "Critical",
  "Tests",
  "Cases/1M",
  "Cases/1M",
];

const sortingOptions = [
  {
    value: "cases",
    uiName: "Cases",
  },
  {
    value: "deaths",
    uiName: "Deaths",
  },
  {
    value: "todayCases",
    uiName: "New Cases",
  },
  {
    value: "todayDeaths",
    uiName: "New Deaths",
  },
  {
    value: "tests",
    uiName: "Tests",
  },
];

export default sortingOptions;

export { defaultSorting, headerRow, sortingOptions };
