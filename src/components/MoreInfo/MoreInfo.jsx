/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../styles/moreInfo.css';
import { fetchTotalPop, fetchVaccineData } from '../../redux/actions';
import Vaccines from './Vaccines';
import PieCharts from './PieChart';

function MoreInfo({ data, fetchVaccines, fetchPop }) {
  const [render, setRender] = useState(false);
  useEffect(() => {
    if (data.pickedCountryLoaded === true) {
      fetchVaccines(data.countryName);
      fetchPop(data.countryName);
    }
  }, [data.pickedCountryCases]);

  useEffect(() => {
    if (data.vaccineDataLoaded && data.totalPopLoaded) {
      setRender(true);
    } else {
      setRender(false);
    }
  }, [data.vaccineDataLoaded, data.totalPopLoaded]);

  if (render) {
    return (
      <section className="MoreInfo">
        <h1>
          Vaccines in
          {' '}
          {data.countryName}
        </h1>
        <div className="VaccinesWrapper">
          <div className="VaccinesLeft">
            Pessoas vacinadas nos últimos 14 dias
            <Vaccines
              countryName={data.countryName}
              chartData={data.pickedCountryVaccine.timeline}
            />
          </div>
          <div className="VaccinesRight">
            <div>
              <h1>Informações importantes</h1>
              Vacinações por milhão de habitantes em
              {' '}
              {data.pickedCountryVaccine.timeline[13].date}
              :
              {' '}
              {data.pickedCountryVaccine.timeline[13].dailyPerMillion}
              <h1>Total de doses aplicadas</h1>
              <PieCharts popData={data.totalPop} chartData={data.pickedCountryVaccine} />
              <div className="PieToolTip">
                <div>
                  <div className="PieColor1" />
                  % doses aplicadas
                </div>
                <div>
                  <div className="PieColor2" />
                  % população total
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <div className="MoreInfo">
      Loading
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchVaccines: (country) => dispatch(fetchVaccineData(country)),
  fetchPop: (country) => dispatch(fetchTotalPop(country)),
});

const mapStateToProps = (state) => ({
  data: state.dataReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);
