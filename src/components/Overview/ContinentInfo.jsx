/* eslint-disable react/prop-types */
import React from 'react';

function ContinentInfo({ continentData }) {
  return (
    <div className="ContinentCard">
      <h1>{continentData.continent}</h1>
      <ul>
        <li>
          Deaths yesterday:
          {' '}
          {continentData.todayDeaths}
        </li>
        <li>
          Total deaths:
          {' '}
          {continentData.deaths}
        </li>
        <li>
          Total cases:
          {' '}
          {continentData.cases}
        </li>
        <li>
          Deaths per million:
          {' '}
          {continentData.deathsPerOneMillion}
        </li>
        <li>
          Today cases:
          {' '}
          {continentData.todayCases}
        </li>
        <li>
          Total tests:
          {' '}
          {continentData.tests}
        </li>
        <li>
          Testes per million:
          {' '}
          {continentData.testsPerOneMillion}
        </li>
      </ul>
    </div>
  );
}

export default ContinentInfo;
