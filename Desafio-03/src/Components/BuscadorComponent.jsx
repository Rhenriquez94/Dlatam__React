import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const BuscadorComponent = ({ onBuscar }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(query);
  };
// No funciona : (
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicSearch">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre"
          value={query}
          onChange={handleInputChange}
        />
      </Form.Group>
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </Form>
  );
};

export default BuscadorComponent;
