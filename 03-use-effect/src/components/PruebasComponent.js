
import React, { useEffect, useState} from 'react'

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("federico rico");
    const [fecha, setFecha] = useState("10-11-1998");

    const modusuario = e => {
      setUsuario(e.target.value);
      console.log("Ha habido un cambio en usuario ");
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
    },[usuario]);


    
  return (
    <div>
        <h1>El Efecto -Hooks UseEffect</h1>
        <strong>{usuario}</strong>
        <strong>{fecha}</strong>
        <form>
            <input  type="text" onChange={modusuario} placeholder="cambia el nombre" />
        </form>
        <button onClick={cambiarFecha}>cambiar fecha </button>
    </div>
  )
}
