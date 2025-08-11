import React, { useEffect, useState } from 'react';
import './Inicio.css';

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/productos')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="inicio-container">
      <h1>Lista de Productos</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul className="productos-list">
          {productos.map(producto => (
            <li key={producto.id} className="producto-item">
              <span className="producto-nombre">{producto.nombre}</span>
              <span className="producto-precio">${producto.precio}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inicio;
