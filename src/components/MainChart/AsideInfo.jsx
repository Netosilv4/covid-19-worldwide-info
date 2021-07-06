/* eslint-disable react/prop-types */
import React from 'react';

function AsideInfo({ worldCases, countryName, pickedCountryCases }) {
  return (
    <aside className="MainAsideDiv">
      <div>
        World total cases:
        {' '}
        {worldCases[14]}
      </div>
      <div>
        Total cases
        {' '}
        {countryName}
        :
        {' '}
        {pickedCountryCases[14]}
      </div>
    </aside>
  );
}

export default AsideInfo;
