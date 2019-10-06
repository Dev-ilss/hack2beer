import React from 'react';
import logo from '../img/logo.png';
import {Container} from 'reactstrap';
import {Route, NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <Container>
            <div className="header">
                <NavLink to="/">
                    <img src={logo} alt="Logo Heineken"/>
                </NavLink>
                <h2>Monbrew X</h2>
            </div>
        </Container>
    )
}
