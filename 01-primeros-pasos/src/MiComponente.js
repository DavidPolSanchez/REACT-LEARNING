//importing
import React from 'react';

//funtion
// tambien se escribe: function Micomponente(){}
const MiCompomente = () => {
   
    let Usuario={
        nombre:'David Pol',
        apellido:'Sanchez',
        web:'https://github.com/DavidPolSanchez'

}   
    return (
        <div className='Micomponente '>
        
            <p>MiComponente</p>
            <h3>Datos Personales</h3>
            <ul >
                <li>nombre:<strong>{Usuario.nombre}</strong></li>
                <li>apellido:<strong>{Usuario.apellido}</strong></li>
                <li>web:<strong>{Usuario.web}</strong></li>
            </ul>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>

        </div>
    );
}; 

//export function
export default MiCompomente ;