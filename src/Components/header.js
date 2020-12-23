import React from 'react'

const Header = (props) => {

    return (
        <div>
            <h1>Hola mundo!</h1>
            <p>{props.saludo}</p>
        </div>
    )
}

export default Header
