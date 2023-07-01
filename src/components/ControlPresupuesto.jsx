const ControlPresupuesto = ({presupuesto,}) => {
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocalString('en-US', 
        {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
    }



    return (
        <div className= "contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica aqui</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>{formatearCantidad(0)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto;