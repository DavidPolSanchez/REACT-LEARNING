
import React, { useEffect, useState} from 'react'
import { AvisoComponent } from './AvisoComponent';
export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("federico rico");
    const [fecha, setFecha] = useState("10-11-1998");
    const [contador, setContador] = useState(0);

    const modusuario = e => {
      setUsuario(e.target.value);
      
    }
    const cambiarFecha = e => {
      setFecha(Date.now());
    };


    //useEffects
     useEffect(()=> {
      console.log("Has cargado el componente o has hecho cambio en un estado");
    },[]);
    /*!!ejecuta solo al empezar */


    useEffect(()=> {
      console.log("Has cambiado el estado de usuario");
      setContador(contador+1)
      console.log(`contador:${contador}`)
    },[usuario]);


    
  return (
    <div>
        <h1>El Efecto -Hooks UseEffect</h1>
        <strong className='label'>{usuario}</strong>
        <strong className={contador<10?'travel':'label'}>{fecha}</strong>
        <form>
            <input  type="text" onChange={modusuario} placeholder="cambia el nombre" />
        </form>
        <button onClick={cambiarFecha}>cambiar fecha </button>


        {usuario == "DAVID" && <AvisoComponent/>}
    </div>
  )
}
