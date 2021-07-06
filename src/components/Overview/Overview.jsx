/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOverviewData } from '../../redux/actions';
import ContinentInfo from './ContinentInfo';
import '../../styles/overview.css';

function Overview({ overview, overviewData }) {
  useEffect(() => {
    overview();
  }, []);
  return (
    <section className="Overview">
      <h1 className="OverviewTitle">
        Overview
      </h1>
      {overviewData.map((e) => <ContinentInfo key={e.continent} continentData={e} />)}
    </section>
  );
}

const mapStateToProps = (state) => ({
  overviewData: state.dataReducer.overviewData,
});

const mapDispatchToProps = (dispatch) => ({
  overview: () => dispatch(fetchOverviewData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
