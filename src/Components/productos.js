import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';

const Productos = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res.results)
            setProductos(res.results)
        })
    },[])
    

    const gridStyle = {
        width: "90% auto",
        margin: "20px auto"
    }

    const imgStyle = {
        width: "100%",
        height: "300px",
        margin: "auto"
    }

    const cardStyle = {
        margin: "10px auto"
    }
    

    return(
        <div className="row row-cols-1 row-cols-md-3 g-4" style={gridStyle}>
            {productos.length > 0 ? productos.map((producto)=>{return(    
            <div className="col" style={cardStyle}>
                <div className="card">
                    <img src={producto.image} className="card-img-top" alt="..." style={imgStyle}/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.name}</h5>
                        <h5 className="card-title">{producto.gender} - {producto.status}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <h5><NavLink to={"/producto/" + producto.id}>Ver más...</NavLink></h5>
                    </div>
                </div>
            </div>
            )})
            : 
            <div className="col">
                <div className="card">
                    <img src="/img/product.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">no hay productos</h5>                       
                        <h5 className="card-title">US$ 499.99</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            }
        </div> 
    )
}

export default Productos