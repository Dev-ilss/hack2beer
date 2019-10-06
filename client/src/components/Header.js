import React from 'react';
import logo from '../img/logo.png';
import {Container} from 'reactstrap';

export default function Header() {
    return (
        <Container>
            <div className="header">
                <img src={logo} alt="Logo Heineken"/>
                <h2>Monbrew X</h2>
            </div>
        </Container>
    )
}
