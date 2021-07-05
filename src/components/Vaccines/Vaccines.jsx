import React from 'react';
import vaccineData from '../../data/data';
import VaccineContainer from './VaccineContainer';

function Vaccines() {
  return (
    <section>
      <h1>Informações sobre vacinas</h1>
      {vaccineData.map((e) => <VaccineContainer key={e.name} data={e} />)}
    </section>

  );
}

export default Vaccines;
