/* eslint-disable react/prop-types */
import React from 'react';
import VaccineChart from './VaccineChart';

function Vaccines({ chartData, countryName }) {
  return (
    <section className="VaccineSection">
      <div className="VaccineChart">
        <VaccineChart
          countryName={countryName}
          chartData={chartData}
        />
      </div>
    </section>
  );
}

export default Vaccines;
