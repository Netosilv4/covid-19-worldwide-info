/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLast30Days, fetchLast30Spec } from '../../redux/actions';
import Tooltips from './ToolTips';
import MainChart from './MainChart';
import AsideInfo from './AsideInfo';
import '../../styles/statesList.css';

function Main({
  data, fetch30, fetchCountry, worldLoaded, pickedCountryLoaded,
}) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch30();
    fetchCountry('Brasil');
  }, []);

  const makeChart = () => {
    const { countryName } = data;
    const aux = [];
    for (let index = 1; index < data.worldDeaths.length; index += 1) {
      aux.push({
        day: `Dia ${index}`,
        Mundo: data.worldDeaths[index] - data.worldDeaths[index - 1],
        [countryName]: data.pickedCountryDeaths[index] - data.pickedCountryDeaths[index - 1],
        amt: 2400,
        pv: 2400,
      });
    }
    setChartData(aux);
  };

  useEffect(() => {
    makeChart();
  }, [data]);

  if (worldLoaded && pickedCountryLoaded) {
    const { countryName } = data;
    return (
      <main className="Main">
        <h1 className="MainTitle">
          COVID-19 in
          {' '}
          {data.countryName}
        </h1>
        <div className="ChartWrapper">
          Mortes registradas por COVID-19 nos ultimos 14 dias
          <MainChart chartData={chartData} countryName={countryName} />
          <Tooltips countryName={countryName} />
        </div>
        <AsideInfo
          countryName={countryName}
          worldCases={data.worldCases}
          pickedCountryCases={data.pickedCountryCases}
        />
      </main>
    );
  }
  return (
    <h1>
      Loading...
    </h1>
  );
}

const mapStateToProps = (state) => ({
  data: state.dataReducer,
  worldLoaded: state.dataReducer.worldLoaded,
  pickedCountryLoaded: state.dataReducer.pickedCountryLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetch30: () => dispatch(fetchLast30Days()),
  fetchCountry: () => dispatch(fetchLast30Spec('Brasil')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
