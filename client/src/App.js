import React from 'react';
import './App.css';
import PrimeItem from './components/PrimeItem';
import {Container} from 'reactstrap';

function App() {
  return (
    <div className="wrapper">
      <Container>
        <PrimeItem servicio={"Agua"} />
        <PrimeItem servicio={"Gas"} />
        <PrimeItem servicio={"Energía Electrica"} />
      </Container>
    </div>
  );
}

export default App;
