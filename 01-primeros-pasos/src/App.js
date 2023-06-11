import logo from './logo.svg';
import './App.css';
import MiCompomente from './MiComponente';
import SegundoComponente  from './SegundoComponente';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenido al master de react
        </p>
       <div className='componentes'>
        {/* Como poner texto de log */}
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
