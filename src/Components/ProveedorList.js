import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ProveedorList = ({ proveedores, onDelete, onEdit }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire('Eliminado', 'El proveedor ha sido eliminado.', 'success');
      }
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>Empresa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.map((prov, index) => (
          <tr key={prov.id}>
            <td>{index + 1}</td>
            <td>{prov.nombre}</td>
            <td>{prov.email}</td>
            <td>{prov.telefono}</td>
            <td>{prov.direccion}</td>
            <td>{prov.empresa}</td>
            <td>
              <Button variant="warning" onClick={() => onEdit(prov)}>
                Editar
              </Button>{' '}
              <Button variant="danger" onClick={() => handleDelete(prov.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProveedorList;
