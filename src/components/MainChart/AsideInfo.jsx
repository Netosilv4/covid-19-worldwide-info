/* eslint-disable react/prop-types */
import React from 'react';

function AsideInfo({ worldCases, countryName, pickedCountryCases }) {
  return (
    <aside className="MainAsideDiv">
      <div>
        Casos totais no mundo:
        {' '}
        {worldCases[14]}
      </div>
      <div>
        Casos totais
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
