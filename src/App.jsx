import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import './styles/global.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
