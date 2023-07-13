import React from 'react'

  const SegundoComponente = () => {
    const libros =['Harry Potter','Juego de Tronos','CleanCode'] ;
   /* ['Harry Potter','Juego de Tronos','CleanCode'];*/
    return (
      <div className='segundo-componente'>
          <h1>Listado de Libros</h1>
          <hr/>
          {libros.length >= 1 ?
              (<ul>
                  {
                      libros.map( (libro ,indice) =>{
                          return <li key ={indice}>{libro}</li>
                      })   
                  }   
              </ul>) 
              :
              (<p>No hay libros</p>)
          }

      </div>
    )
  }
 export default SegundoComponente;