import React, { useState } from 'react';
import { getProveedores, saveProveedores } from './utils/localStorageHelper';
import ProveedorForm from './components/ProveedorForm';
import ProveedorList from './components/ProveedorList';

const App = () => {
  const [proveedores, setProveedores] = useState(getProveedores());
  const [proveedorToEdit, setProveedorToEdit] = useState(null);

  const handleSave = (proveedor) => {
    if (proveedor.id) {

      const updated = proveedores.map((p) => (p.id === proveedor.id ? proveedor : p));
      setProveedores(updated);
      saveProveedores(updated);
    } else {

      proveedor.id = Date.now();
      const updated = [...proveedores, proveedor];
      setProveedores(updated);
      saveProveedores(updated);
    }
    setProveedorToEdit(null);
  };

  const handleDelete = (id) => {
    const updated = proveedores.filter((p) => p.id !== id);
    setProveedores(updated);
    saveProveedores(updated);
  };

  const handleEdit = (proveedor) => {
    setProveedorToEdit(proveedor);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">CRUD Proveedores</h1>
      <ProveedorForm onSave={handleSave} proveedorToEdit={proveedorToEdit} />
      <ProveedorList proveedores={proveedores} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
