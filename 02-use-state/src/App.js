import logo from './logo.svg';
import './App.css';
import React from 'react';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';



// Resto de tu código que utiliza JSX

function App() {
  
  const fecha = new Date();
  const  añoexacto = fecha.getFullYear();
  console.log(añoexacto);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>El estado en React - Hook useState</h1>
      <MiPrimerEstado/>
      <EjercicioComponent year={añoexacto}/>
      </header>
    </div>
  );
}

export default App;
