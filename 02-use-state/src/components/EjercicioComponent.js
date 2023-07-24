
import React,{useState} from 'react'
import { PropTypes } from 'prop-types';
export const EjercicioComponent = ({year}) => {

    const[YearNow,setYearNow] = useState(year);

   const añadiraño = e => {
    setYearNow(YearNow+1)
   }
   const reduciraño =e =>{
    setYearNow(YearNow-1)
   }

   const escribiraño = e => {
    let valor = parseInt(e.target.value);
    if(Number.isInteger(valor)) {
        setYearNow(valor)
    }else{
        setYearNow(year)
    }
   
   }
    return (
    <div>
        <h2>Ejercicios con Eventos y UseState</h2>
        <strong className='label'>{YearNow}</strong>
        <p>
            <button onClick={reduciraño}>Anterior</button>
            <button onClick={añadiraño}>Siguiente</button>
            <input type="text" onChange={escribiraño} placeholder="number"></input>
        </p>
    </div>
  )
}
EjercicioComponent.propTypes = {
    years: PropTypes.number.isRequired
}