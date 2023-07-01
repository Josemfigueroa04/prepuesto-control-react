import CerrarBtn from '../img/cerrar.svg';

const Modal =({setModal,animarModal}) => {

    const ocultarModal = () => {
        setModal(false);
    }
    
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />

            </div>
            <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input type="text" placeholder="Añade el Nombre del Gasto" id='nombre' />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input type="number" placeholder="Añade la cantidad del Gasto" id='cantidad' />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="" id="categoria">
                        <option value="">-- Seleccione --</option>
                        <opcion value="ahorro">Ahorro</opcion>
                        <opcion value="comida">Comida</opcion>
                        <opcion value="casa">Casa</opcion>
                        <opcion value="gastos">Gastos Varios</opcion>
                        <opcion value="ocio">Ocio</opcion>
                        <opcion value="salud">Salud</opcion>
                        <opcion value="suscripciones">Suscripciones</opcion>
                    </select>
                    <input type="submit" value="Añadir Gasto"/>

                </div>
            </form>
        </div>
    )
}

export default Modal;