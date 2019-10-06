import React from 'react'

export default function PrimeItem(props) {
    return (
        // Añadir el degradado del componente segun la propiedad color
        <div className="degradado">
            {/* Añadimos el servicio */}
            <h3>{props.servicio}</h3>
        </div>
    )
}
