import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ProveedorForm = ({ onSave, proveedorToEdit }) => {
  const [proveedor, setProveedor] = useState({
    id: '',
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    empresa: '',
  });

  useEffect(() => {
    if (proveedorToEdit) setProveedor(proveedorToEdit);
  }, [proveedorToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, telefono, direccion, empresa } = proveedor;
    if (!nombre || !email || !telefono || !direccion || !empresa) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }
    onSave(proveedor);
    setProveedor({ id: '', nombre: '', email: '', telefono: '', direccion: '', empresa: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={proveedor.nombre}
          onChange={handleChange}
          placeholder="Nombre del proveedor"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={proveedor.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          name="telefono"
          value={proveedor.telefono}
          onChange={handleChange}
          placeholder="Número de teléfono"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Dirección</Form.Label>
        <Form.Control
          type="text"
          name="direccion"
          value={proveedor.direccion}
          onChange={handleChange}
          placeholder="Dirección"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Empresa</Form.Label>
        <Form.Control
          type="text"
          name="empresa"
          value={proveedor.empresa}
          onChange={handleChange}
          placeholder="Nombre de la empresa"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default ProveedorForm;
