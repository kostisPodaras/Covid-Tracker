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
  "cases",
  "deaths",
  "todayCases",
  "todayDeaths",
  "tests",
];

export default sortingOptions;

export { defaultSorting, headerRow, sortingOptions };
