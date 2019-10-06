import React from 'react';
import Header from '../components/Header';
import {Container,Row, Col} from 'reactstrap';
import {matchPath} from 'react-router-dom';
import propTypes from 'prop-types';

export default function Servicio(props) {
    const {data} = props.location;
    console.log(data);
    return (
        <div>
            <Header />
            <Container fluid="true">
                <Row>
                    <Col sm="12" md={{size: 6}}>
                        <h2>{}</h2>
                    </Col>
                    <Col sm="12" md={{size: 6}}></Col>
                </Row>
            </Container>
        </div>
    )
}


Container.propTypes = {
    fluid: propTypes.bool
}