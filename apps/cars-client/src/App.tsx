import React from 'react';
import { CarsPage } from "./components/pages/carsPage"
import logo from './logo.svg';
import './App.css';
import { CountriesPage } from './components/pages/countriesPage';

function App() {
  return (
    <div className='container'>
      <CarsPage />
      <CountriesPage />
    </div>
  );
}



function MainComponent() {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
}
export default App;
