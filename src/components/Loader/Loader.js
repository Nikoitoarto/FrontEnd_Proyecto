import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader" />
      <div className="loading-text">Cargando...</div> {/* Texto separado */}
    </div>
  );
};

export default Loader;