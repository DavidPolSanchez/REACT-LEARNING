import logo from './logo.svg';
import './App.css';
import MiCompomente from './MiComponente';
import SegundoComponente  from './SegundoComponente';
import TercerComponente from './TercerComponente';
import { EventosComponente } from './EventosComponente';
import React from 'react';


// Resto de tu código que utiliza JSX

function App() {
  const ficha_medica={
    altura:'169',
    peso:'64',
    estado:'Buenisimo BB',
    alergias:'a las estupideces'

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenido al master de react
        </p>
       <div className='componentes'>
        <EventosComponente/>
        {/* Como poner texto de log */}
        <TercerComponente nombre="David Pol" apellidos="Sanchez Martos" ficha={ficha_medica}/>  
        <hr />        
        <SegundoComponente />  
        <hr />
        <MiCompomente />
       
       </div>
       
      </header>
    </div>
  );
}

export default App;
