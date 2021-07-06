/* eslint-disable react/prop-types */
import React from 'react';
import '../../styles/vaccineContainer.css';

function VaccineContainer({ data }) {
  return (
    <div className="VaccineContainer">
      <h3>{data.name}</h3>
      <div>
        <h5>
          Method:
          {' '}
          {data.method}
        </h5>
        <h5>
          Vaccine Type:
          {' '}
          {data.VaccineType}
        </h5>
        <h5>
          Doses:
          {' '}
          {data.doses}
        </h5>
      </div>
      <a target="blank" href="https://www.who.int/news-room/q-a-detail/vaccines-and-immunization-what-is-vaccination?adgroupsurvey={adgroupsurvey}&gclid=Cj0KCQjw24qHBhCnARIsAPbdtlIlxW6vNtKXoysZLNQozJ3Mz1432yNHOqLRN4mNYh2FaGOKKbmi2K0aAgj-EALw_wcB">More info</a>
    </div>
  );
}

export default VaccineContainer;
