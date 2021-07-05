/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../../styles/searchbar.css';
import { connect } from 'react-redux';
import { fetchCountries, fetchLast30Spec } from '../../redux/actions';

function SearchBar({
  pickCountry, countries, countriesLoaded, loadCountries,
}) {
  useEffect(() => {
    loadCountries();
  }, []);

  const [pais, setPais] = useState('');
  if (countriesLoaded) {
    return (
      <form className="CountryForm">
        <label className="CountryPicked" htmlFor="CountryPicked">
          <select value={pais} onChange={({ target }) => setPais(target.value)}>
            {countries.map((e) => <option key={e.country} value={e.country} id="CountryPicked">{e.country}</option>)}
          </select>
        </label>
        <button type="button" onClick={() => pickCountry(pais)}>Procurar</button>
      </form>
    );
  }
  return (
    <h1>Loading Countries</h1>
  );
}

const mapDispatchToProps = (dispatch) => ({
  pickCountry: (value) => dispatch(fetchLast30Spec(value)),
  loadCountries: () => dispatch(fetchCountries()),
});

const mapStateToProps = (state) => ({
  countries: state.dataReducer.countries,
  countriesLoaded: state.dataReducer.countriesLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
