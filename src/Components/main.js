import React from 'react'
import { Route } from 'react-router-dom'
import Productos from './productos'
import Ofertas from './ofertas'
import Home from './home'
import Contacto from './contacto'
import Item from './item'

const Main = () => {

    return (
        <main>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/productos">
                <Productos/>
            </Route>

            <Route path="/ofertas">
                <Ofertas/>
            </Route>

            <Route path="/contacto">
                <Contacto/>
            </Route>

            <Route path="/producto/:id">
                <Item/>
            </Route>
        </main>
    )
}

export default Main
