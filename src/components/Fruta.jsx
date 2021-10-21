import React, { Fragment } from 'react'

const Fruta = ({fruta}) => {
    return (
        <Fragment>
            <h1>{fruta.id} {fruta.nombre}</h1>
            <p>Cantidad: {fruta.cantidad}</p>
            <p>Precio: {fruta.precio}</p>
        </Fragment>
    )
}

export default Fruta
