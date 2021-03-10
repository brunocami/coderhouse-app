import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import {NavLink} from 'react-router-dom'


const Item = () => {

    const parametros = useParams()
    const characterId = parametros.id

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            res.results.map(producto => {
                if (producto.id == characterId) {
                    console.log(producto)
                    setProductos(producto)
                }
            })
        })
    },[])

    const [contador, setContador] = useState(0)

    const aumentarContador = () => {
      setContador(contador + 1)
    }
    const restarContador = () => {
      if (contador > 0) {
        setContador(contador - 1)
      } else {
        setContador(0)
      }
      
    }
    const resetearContador = () => {
      setContador(0)
    }

    const [characterInfo, setInfo] = useState([])

    const addCart = () => {
        setInfo(characterInfo.push(productos.name, productos.gender))
        console.log(characterInfo)
    }




    const gridStyle = {
        width: "50%",
        margin: "auto"
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page"><NavLink to="/productos">Productos</NavLink></li>
                </ol>
            </nav>
            <div className="row row-cols-1 row-cols-md-1 g-4" style={gridStyle}>
                    <div className="col">
                    <div className="card">
                        <img src={productos.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{productos.name}</h5>
                            <h5 className="card-title">Gender: {productos.gender}</h5>
                            <h5 className="card-title">Status: {productos.status}</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p>El contador va: {contador} </p>
                            <div style={{width: '100%', display: 'flex', justifyContent:'space-between'}}>
                                <div>
                                    <button type="button" className="btn btn-outline-danger" onClick={ restarContador }>-</button>
                                    <button type="button" className="btn btn-outline-warning" onClick={ resetearContador }>0</button>
                                    <button type="button" className="btn btn-outline-success" onClick={ aumentarContador }>+</button>                                    
                                </div>
                                <button type="button" className="btn btn-success" onClick={addCart}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </button>                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item