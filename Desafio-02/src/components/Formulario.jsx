import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CustomAlert from './CustomAlert'


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [AlertaError, setAlertaError] = useState(false);
  const [AlertaOk, setAlertaOk] = useState(false);


  const handleNombreChange = (e) => {
    setNombre(e.target.value);
   
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de que todos los campos esten llenos
    if(!nombre || !email || !password || !confirmPassword){
      setAlertaError(true); 
      setAlertaOk(false);
      return; 
    } 


    // Validar formato de mail mediante REGEX
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: 'El correo electrónico no es válido',
      }));
      return;
    }


  

    // Validar que las contraseñas sean iguales
    if (password !== confirmPassword) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Las contraseñas no coinciden',
      }));
      return;
    }

    // Si pasa todas las validaciones
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirmación de Password:', confirmPassword);

    setAlertaError(false); // Asegúrate de ocultar la alerta de error si está visible
    setAlertaOk(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicNombre">
      <Form.Control
        value={nombre}
        onChange={handleNombreChange}
        type="text"
        placeholder="Nombre"
        isInvalid={!!formErrors.nombre}
      />
      <Form.Control.Feedback type="invalid">
        {formErrors.nombre}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        value={email}
        onChange={handleEmailChange}
        type="email"
        placeholder="tuemail@ejemplo.com"
        isInvalid={!!formErrors.email}
      />
      <Form.Control.Feedback type="invalid">
        {formErrors.email}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control
        value={password}
        onChange={handlePasswordChange}
        type="password"
        placeholder="Contraseña"
        isInvalid={!!formErrors.password}
      />
      <Form.Control.Feedback type="invalid">
        {formErrors.password}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
      <Form.Control
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        type="password"
        placeholder="Confirma tu Contraseña"
        isInvalid={!!formErrors.confirmPassword}
      />
      <Form.Control.Feedback type="invalid">
        {formErrors.confirmPassword}
      </Form.Control.Feedback>
    </Form.Group>

    {AlertaError && <CustomAlert tipo="danger" mensaje="¡Faltan datos!"/>}
    {AlertaOk && <CustomAlert tipo="success" mensaje="¡Ingreso exitoso!"/>}

    <Button variant="primary" type="submit">
      Submit
    </Button>

  </Form>
  );
};



export default Formulario