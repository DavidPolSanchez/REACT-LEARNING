import  React from 'react';
import PropTypes from 'prop-types';

const TercerComponente = ({nombre,apellidos,ficha}) => {
    console.log(nombre);
    return (
        <div className='tercer-componente'>
        <h1>Comunicación entre Componentes</h1>
        <ul className=''>
          <li> {nombre}</li>
          <li> {apellidos}</li>
          <li> {ficha.altura}</li>
          <li> {ficha.estado}</li>
        </ul>
        </div>
      )
}

TercerComponente.protoTypes = {
  nombre: PropTypes.string.isRequired,
  apellido : PropTypes.string.isRequired,
  ficha: PropTypes.object
}
TercerComponente.defaultProps={
  ficha:{
    altura:'169',
    peso:'64',
    estado:'por defecto',
    alergias:'a las estupideces'
  }
}
export default TercerComponente;