import React from 'react';
import '../App.css';
import {Container, Row, Col} from 'reactstrap';
import PrimeItem from '../components/PrimeItem';
import Header from '../components/Header';
import waterOutline from '@iconify/icons-ion/water-outline';
import fireOutline from '@iconify/icons-ant-design/fire-outline';
import flashIcon from '@iconify/icons-mdi-light/flash';

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        {/* Le pasamos el servicio que es y el color */}
        <h1 className="hero_title">Monitoreo de servicios</h1>
        <Row>
          <Col sm="12" md={{size:4}}>
            <PrimeItem servicio={"Agua"} width={"7em"} icon={waterOutline} color={"#28C8DE"} />
          </Col>
          <Col m="12" md={{size:4}}>
            <PrimeItem servicio={"Gas"} width={"7em"} icon={fireOutline} color={"#E94F37"} />
          </Col>
          <Col m="12" md={{size:4}}>
            <PrimeItem servicio={"Energia electrica"} width={"7em"} icon={flashIcon} color={"#EBD31D"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
