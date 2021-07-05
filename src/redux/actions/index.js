const WORLD_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=15';

export const worldData = (value) => ({
  type: 'worldData',
  value,
});

export const countryPicked = (value) => ({
  type: 'countryPicked',
  value,
});

export const checkLoad = (value) => ({
  type: 'checkLoad',
  value,
});

export const getVaccineData = (value) => ({
  type: 'getVaccineData',
  value,
});

export const getOverviewData = (value) => ({
  type: 'getOverviewData',
  value,
});

export const getTotalPop = (value) => ({
  type: 'getTotalPop',
  value,
});

export const getCountries = (value) => ({
  type: 'getCountries',
  value,
});

// fetchAllState Thunk's

export const fetchLast30Days = () => async (dispatch) => {
  let data = await fetch(WORLD_URL);
  data = await data.json();
  dispatch(worldData(data));
};

export const fetchLast30Spec = (value) => async (dispatch) => {
  let data = await fetch(`https://disease.sh/v3/covid-19/historical/${value}?lastdays=15`);
  data = await data.json();
  dispatch(countryPicked(data));
};

export const fetchVaccineData = (value) => async (dispatch) => {
  let data = await fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${value}?lastdays=15&fullData=true`);
  data = await data.json();
  dispatch(getVaccineData(data));
};

export const fetchOverviewData = () => async (dispatch) => {
  let data = await fetch('https://disease.sh/v3/covid-19/continents?yesterday=true');
  data = await data.json();
  dispatch(getOverviewData(data));
};

export const fetchCountries = () => async (dispatch) => {
  let data = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries');
  data = await data.json();
  let data2 = await fetch('https://disease.sh/v3/covid-19/historical/');
  data2 = await data2.json();
  const countries = [];
  data2.forEach((e) => {
    countries.push(e.country);
  });
  const final = data.filter((e) => countries.includes(e.country));
  dispatch(getCountries(final));
};

export const fetchTotalPop = (value) => async (dispatch) => {
  let data = await fetch(`https://world-population.p.rapidapi.com/population?country_name=${value}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'fafb6bb9f3mshafa8100969ff7f5p1430c7jsn2ed5bdae717b',
      'x-rapidapi-host': 'world-population.p.rapidapi.com',
    },
  });
  data = await data.json();
  dispatch(getTotalPop(data));
};
