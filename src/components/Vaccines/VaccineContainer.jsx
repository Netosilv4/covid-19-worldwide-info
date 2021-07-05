/* eslint-disable react/prop-types */
import React from 'react';

function VaccineContainer({ data }) {
  return (
    <div className="VaccineContainer">
      <h3>{data.name}</h3>
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
          Method:
          {' '}
          {data.method}
        </h5>
        <h5>
          Method:
          {' '}
          {data.method}
        </h5>
      </div>
      <a href={data.moreInfo}>Mais Informações</a>
    </div>
  );
}

export default VaccineContainer;
