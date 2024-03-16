import { useState } from 'react';
import './App.css';
import {Listado} from './Components/Listado';
import Formulario from './Components/Formulario';
import BuscadorComponent from './Components/BuscadorComponent';

function App() {
  
    const [colaboradores, setColaboradores] = useState([]);
    
  
    const agregarColaborador = (nuevoColaborador) => {
      setColaboradores([...colaboradores, nuevoColaborador]);
    };
  
  
  
    return (
      <main className='container'>
        <Formulario agregarColaborador={agregarColaborador} />
        <Listado colaboradoresNuevos={colaboradores} />
        <BuscadorComponent colaboradores={colaboradores} setColaboradores={setColaboradores} />
      </main>
    );
  
}

export default App;
