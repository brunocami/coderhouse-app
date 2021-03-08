import React, {useEffect, useState} from 'react'

const Productos = ({}) => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        console.log("me repito en cada render")
    })

    useEffect(() => {
        console.log("me ejecuto al princio y nada mas")
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA5725")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setProductos(res.results)
        })
    },[])
    

    const [contador, setContador] = useState(0)
    useEffect(() => {
      if (contador > 5){
        console.log("pasaste de 5")
      }
    })
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

    const gridStyle = {
        width: "90% auto",
        margin: "20px auto"
    }

    const imgStyle = {
        width: "100%",
        height: "200px",
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
                    <img src={producto.thumbnail} className="card-img-top" alt="..." style={imgStyle}/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <h5 className="card-title">US$ {producto.price}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>El contador va: {contador} </p>
                        <button type="button" class="btn btn-outline-danger" onClick={ restarContador }>-</button>
                        <button type="button" class="btn btn-outline-warning" onClick={ resetearContador }>0</button>
                        <button type="button" class="btn btn-outline-success" onClick={ aumentarContador }>+</button>
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