const KEY = 'proveedores';

export const getProveedores = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveProveedores = (proveedores) => {
  localStorage.setItem(KEY, JSON.stringify(proveedores));
};
