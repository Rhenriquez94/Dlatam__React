/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from './Alert'



const Formulario = ({ agregarColaborador }) => {
  const [nombre,setNombre] = useState('');
  const [correo,setcorreo] = useState('');
  const [edad,setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono,setTelefono] = useState('');

  const [formErrors, setFormErrors] = useState({});
  const [alertaError, setAlertaError] = useState(false);
  const [alertaOk, setAlertaOk] = useState(false);


  useEffect(() => {
    if (alertaError || alertaOk) {
      const timeoutId = setTimeout(() => {
        setAlertaError(false);
        setAlertaOk(false);
      }, 3000); 

      return () => clearTimeout(timeoutId);
    }
  }, [alertaError, alertaOk]);


  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleNombreChange = (e) => {
    const newValue = capitalizeFirstLetter(e.target.value);
    setNombre(newValue);
  };


  const handlecorreoChange = (e) =>{
    setcorreo(e.target.value);
  };

  const handleEdadChange = (e) =>{
    const nuevaEdad = parseInt(e.target.value);
  
    if (!isNaN(nuevaEdad) && nuevaEdad >=0){
      setEdad(e.target.value);
    } 
  };
  
  const handleCargoChange = (e) =>{
    setCargo(e.target.value);
  };

  const handleTelefoneChange = (e) =>{
    setTelefono(e.target.value);
  };


  // Validacion
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de que todos los campos esten llenos
    if(!nombre || !correo || !edad || !cargo || !telefono){
      setAlertaError(true); 
      setAlertaOk(false);
      return; 
    } 

    // Validar formato de mail mediante REGEX
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        correo: 'El correo electrónico no es válido',
      }));
      return;
    }

    setAlertaError(false); 
    setAlertaOk(true);

    const nuevoColaborador = { nombre, correo, edad, cargo, telefono }; // Crear un objeto con los datos del nuevo colaborador
    agregarColaborador(nuevoColaborador); // Pasar el nuevo colaborador a la función agregarColaborador

    // Limpia los campos 
    setNombre('');
    setcorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');

  };

  return (
  <>
 
    <Form className='formulario' onSubmit={handleSubmit}>
    <h4>Ingreso de colaboradores</h4>
    <Form.Group className="mb-3" controlId="formBasicNombre">
      <Form.Control
        value={nombre}
        type="text"
        placeholder="nombre"
        onChange={handleNombreChange}
        style={{ textTransform: 'capitalize' }}
      />
       <Form.Control.Feedback type="invalid">
        {formErrors.nombre}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasiccorreo">
      <Form.Control
        value={correo}
        type="text"
        placeholder="correo"
        isInvalid={!!formErrors.correo}
        onChange={handlecorreoChange}
      />
      <Form.Control.Feedback type="invalid">
        {formErrors.correo}
      </Form.Control.Feedback>

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEdad">
      <Form.Control
        value={edad}
        type="text"
        placeholder="edad"
        onChange={handleEdadChange}
      />
       <Form.Control.Feedback type="invalid">
        {formErrors.edad}
      </Form.Control.Feedback>

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCargo">
      <Form.Control
        value={cargo}
        type="text"
        placeholder="cargo"
        onChange={handleCargoChange}
      />
      <Form.Control.Feedback type="invalid">
        {formErrors.cargo}
      </Form.Control.Feedback>

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicTelefono">
      <Form.Control
        value={telefono}
        type="number"
        placeholder="telefono"
        onChange={handleTelefoneChange}
      />
        <Form.Control.Feedback type="invalid">
          {formErrors.telefono}
        </Form.Control.Feedback>
    </Form.Group>

    {alertaError && <Alert tipo="danger" mensaje="¡Faltan datos!"/>}
    {alertaOk && <Alert tipo="success" mensaje="¡Ingreso exitoso!"/>}

    <Button variant="primary" type="submit">
      Submit
    </Button>

  </Form> 
  </>
  )
}

export default Formulario