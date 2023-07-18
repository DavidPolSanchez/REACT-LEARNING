import React from 'react'

export const EventosComponente = () => {

    const HandlerHasDadoClick=(e,nombre) => {
        alert("Has Dado Click"+nombre);
    }

    const handlerHasDadoDobleClick = (e) => {
        alert("Has Dado Docble click")
    }

    const hasEntrado= (e,accion)=>{
      console.log(`has ${accion}a la caja del mouse`);
    }

    const estasDentro = e => {
      console.log("Estas Dentro")
    }
    const estasFuera = e => {
      console.log("EstasFuera")
    }


  return (
    <div>
        <h1>Eventos de React </h1>

        <p>
          {/*Evento CLick*/}
          <button onClick={e =>HandlerHasDadoClick(e,"david Pol ") }>Dame Click</button>          
        </p>

        <p>
          {/*Evento Doble CLick*/}
          <button onDoubleClick={handlerHasDadoDobleClick }>Dame doble Click</button>  
        </p>

        <p>
          {/*Eventos OnMouse*/}
          <div id="caja" 
          
            onMouseEnter={e => hasEntrado(e,"entrado")} 
            onMouseLeave={e => hasEntrado(e,"salido")}
            >
            Pasa por encima 
          </div>
        </p>
        
        <p>
          {/*Eventos OnFocus/blur*/}
          <input type="text" 
          
            onFocus={estasDentro} 
            onMouseLeave={estasFuera}
            placeholder="Introduce un texto"
            >
            
          </input>
        </p>
      </div>
  )
}
