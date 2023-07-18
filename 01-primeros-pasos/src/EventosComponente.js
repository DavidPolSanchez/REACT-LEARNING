import React from 'react'

export const EventosComponente = () => {

    const HandlerHasDadoClick=(e,nombre) => {
        alert("Has Dado Click"+nombre);
    }


  return (
    <div>
        <h1>Eventos de React </h1>
        {/*Evento CLick*/}
        <button onClick={e =>HandlerHasDadoClick(e,"david Pol ") }>Dame Click</button>
        </div>
  )
}
