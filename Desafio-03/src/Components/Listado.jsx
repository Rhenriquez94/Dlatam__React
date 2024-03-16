import { useState, useEffect } from 'react';
import { BaseColaboradores } from '../BaseColaboradores';

export const Listado = ({ colaboradoresNuevos }) => {
  const [colaboradores, setColaboradores] = useState([]);

  // Utilizar useEffect para actualizar colaboradores cuando colaboradoresNuevos cambie
  useEffect(() => {
    // Combinar colaboradores existentes con los nuevos
    setColaboradores([...BaseColaboradores, ...colaboradoresNuevos]);
  }, [colaboradoresNuevos]);

  return (
    //style={{ maxHeight: '200px', overflowY: 'auto' }}
    <table className='table table-striped' > 
      <thead className='thead-dark'>
        <tr className='table-light'>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => (
          <tr key={index}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
