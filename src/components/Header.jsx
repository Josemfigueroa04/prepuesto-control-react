import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";


const Header = ({
    presupuesto,
    setPresupuesto, 
    isValidPresupuesto,
    setIsValidPresupuesto,

}) => {
    return (
        <header className="">
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? ( 
            <ControlPresupuesto
            presupuesto={presupuesto}
            
            />
        ) : (
                <NuevoPresupuesto 
                presupuesto={presupuesto} 
                setPresupuesto={setPresupuesto} 
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}                    
                />  
        )}

        
        </header>
    );
    }
    export default Header;