import { useState } from "react"
import React from 'react'

export const MiPrimerEstado = () => {
  
   //! Problematica
  /*
  let nombre= "David Pol";
  
  const cambiarNombre = e => {
    nombre = "Federico Const"
  }
  */ 

 
  const [ nombre , setNombre ] = useState("David Pol");

  const cambiarNombre = (e,nombreFijo) =>{

    setNombre(nombreFijo);
    console.log(e.target);

  }

  return (
    <div>
      <h3>Componente MiPrimerEstado</h3>
      <strong className={nombre.length >= 4? 'label':'travel'}>
         { nombre } 
         </strong>
      
        <button onClick={e => cambiarNombre(e,"Francisco")}>cambiar el nombre </button>  
     
        <input type="text" onChange={ e => cambiarNombre(e, e.target.value)} placeholder="escribe un nombre"/>
     
    </div>


  )
}
