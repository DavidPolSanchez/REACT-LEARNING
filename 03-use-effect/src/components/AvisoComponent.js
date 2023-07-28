import React, { useEffect } from 'react'

export const AvisoComponent = () => {
    useEffect(() => {
        //cuando se monta el elemento
        alert("MOntado")

        //cuando el componente se desmonta
        return ()=>{
            alert("DESMONTADO")
        }
    },[])
  return (
    <div>
        <h1>Hemos superado los 20 en el contador </h1>
        <button onClick={
            e=>{
                alert("Bienvenido")
            
            }
        }>activa la alerta </button>
    </div>
  )
}
