/* eslint-disable react/prop-types */
import React from 'react';

function ContinentInfo({ continentData }) {
  return (
    <div className="ContinentCard">
      <h1>{continentData.continent}</h1>
      <ul>
        <li>
          Mortes hoje:
          {' '}
          {continentData.todayDeaths}
        </li>
        <li>
          Total de mortes:
          {' '}
          {continentData.deaths}
        </li>
        <li>
          Casos totais:
          {' '}
          {continentData.cases}
        </li>
        <li>
          Mortes por milhão de habitante:
          {' '}
          {continentData.deathsPerOneMillion}
        </li>
        <li>
          Casos hoje:
          {' '}
          {continentData.todayCases}
        </li>
        <li>
          Total de testes realizados:
          {' '}
          {continentData.tests}
        </li>
        <li>
          Testes por milhão de habitante:
          {' '}
          {continentData.testsPerOneMillion}
        </li>
      </ul>
    </div>
  );
}

export default ContinentInfo;
