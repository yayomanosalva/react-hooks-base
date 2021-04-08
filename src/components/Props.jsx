import React from 'react'

const Props = (props) => {
    const {nombre, app} = props
    return (
        <div>
            <h2>Bienvenido {nombre} {app} </h2>
        </div>
    )
}

export default Props
