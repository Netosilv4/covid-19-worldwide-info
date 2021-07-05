const INITIAL_STATE = {
  worldDeaths: [],
  worldCases: [],
  pickedCountryDeaths: [],
  pickedCountryCases: [],
  pickedCountryVaccine: [],
  overviewData: [],
  countries: [],
  countryName: '',
  totalPop: 0,
  totalPopLoaded: false,
  countriesLoaded: false,
  worldLoaded: false,
  pickedCountryLoaded: false,
  vaccineDataLoaded: false,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'worldData':
      return {
        ...state,
        worldDeaths: [...Object.values(action.value.deaths)],
        worldCases: [...Object.values(action.value.cases)],
        worldLoaded: true,
      };
    case 'countryPicked':
      return {
        ...state,
        pickedCountryDeaths: [...Object.values(action.value.timeline.deaths)],
        pickedCountryCases: [...Object.values(action.value.timeline.cases)],
        countryName: action.value.country,
        pickedCountryLoaded: true,
        vaccineDataLoaded: false,
        totalPopLoaded: false,
      };
    case 'getVaccineData':
      return {
        ...state,
        pickedCountryVaccine: action.value,
        vaccineDataLoaded: true,
      };
    case 'getOverviewData':
      return { ...state, overviewData: action.value };
    case 'getTotalPop':
      return {
        ...state,
        totalPop: action.value,
        totalPopLoaded: true,
      };
    case 'getCountries':
      return {
        ...state,
        countries: action.value,
        countriesLoaded: true,
      };
    default:
      return state;
  }
};

export default dataReducer;
