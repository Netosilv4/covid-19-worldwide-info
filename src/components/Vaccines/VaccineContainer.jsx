/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/vaccineContainer.css';

function VaccineContainer({ data }) {
  return (
    <div className="VaccineContainer">
      <h3>{data.name}</h3>
      {console.log(data)}
      <div>
        <h4>
          Desenvolvida por
          {' '}
          {data.dev}
        </h4>
        <h5>
          Method:
          {' '}
          {data.method}
        </h5>
        <h5>
          Research Name:
          {' '}
          {data.researchName}
        </h5>
        <h5>
          Vaccine Type:
          {' '}
          {data.VaccineType}
        </h5>
      </div>
      <a href={data.moreInfo}>Mais Informações</a>
    </div>
  );
}

export default VaccineContainer;
