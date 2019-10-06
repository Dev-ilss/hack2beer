import React from 'react';
import Icon from '@iconify/react';

export default function PrimeItem(props) {
    return (
        // Añadir el degradado del componente segun la propiedad color
        <div className="primeItem">
            {/* Añadimos el servicio */}
            <Icon icon={props.icon} width={props.width} color={props.color}  />
            <h3 className="primeItem__titulo" style={{color: props.color}}>{props.servicio}</h3>
        </div>
    )
}
