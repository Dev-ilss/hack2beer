import React from 'react';
import Header from '../components/Header';
import {Container,Row, Col} from 'reactstrap';
import {matchPath} from 'react-router-dom';
import propTypes from 'prop-types';
import {Line} from 'react-chartjs-2';

export default function Servicio(props) {
    const {data} = props.location;
    return (
        <div>
            <Header />
            <Container fluid="true">
                <Row>
                    {/* Datos hardcode temporales */}
                    <Col sm="12" md={{size: 6}}>
                        <div className="container__datos">
                            <h2 className="actual">{Math.floor(Math.random()*(8000 + 13000))} hl<span>de agua en uso</span></h2>
                            <h4 className="ayer">13,241 hl <span className="rojo">35%</span>  <span className="span">Ayer</span></h4>
                            <h4 className="semana">30,556 hl <span className="verde">22%</span> <span className="span">Esta semana</span></h4>
                        </div>
                    </Col>
                    <Col sm="12" md={{size: 6}}>
                        <h5>Bebida en proceso: <span>Heineken</span></h5>
                        <Line data={{
                            labels: ['Ene-Feb', 'Mar-Abr', 'May-Jun', 'Jul-Ago', 'Sep-Oct', 'Nov-Dic'],
                            datasets: [{
                                label: 'Hoctolitros',
                                data: [4000, 24230, 7580, 3600, 11203, 9001],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }} />
                        <p className="parrafoChart">Hay un incremento del 23% el dia de hoy, esta cantidad puede ser utilizada en sistema de enfriamento</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


Container.propTypes = {
    fluid: propTypes.bool
}