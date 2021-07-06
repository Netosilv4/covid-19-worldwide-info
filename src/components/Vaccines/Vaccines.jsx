import React from 'react';
import vaccineData from '../../data/data';
import VaccineContainer from './VaccineContainer';

function Vaccines() {
  return (
    <section className="Vaccines">
      <h1>Vaccine Info</h1>
      {vaccineData.map((e) => <VaccineContainer key={e.name} data={e} />)}
    </section>

  );
}

export default Vaccines;
