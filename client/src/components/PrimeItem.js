import React from 'react';
import Icon from '@iconify/react';
import {Redirect, Route, Link} from 'react-router-dom';

export default function PrimeItem(props) {

    const routes = [
        {to: '/', label: 'Home'},
        {to: '/servicio', label: 'Servicio'}
    ]
    return (
        <Link to={{pathname: "/servicio", data: props.servicio}}>
            <div className="primeItem">
                {/* Añadimos el servicio */}
                <Icon icon={props.icon} width={props.width} color={props.color}  />
                <h3 className="primeItem__titulo" style={{color: props.color}}>{props.servicio}</h3>
            </div>
        </Link>
    )
}
