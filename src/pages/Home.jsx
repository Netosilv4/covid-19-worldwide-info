import React from 'react';
import Main from '../components/MainChart/Main';
import SearchBar from '../components/Searcbar/SearchBar';
import MoreInfo from '../components/MoreInfo/MoreInfo';
import Overview from '../components/Overview/Overview';
import Vaccines from '../components/Vaccines/Vaccines';

function Home() {
  return (
    <>
      <SearchBar />
      <Main />
      <MoreInfo />
      <Overview />
      <Vaccines />
    </>
  );
}

export default Home;
