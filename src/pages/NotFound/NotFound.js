import React from 'react';
import './not-found.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Lo sentimos, la página que buscas no existe.</p>
      <button className="not-found-button" onClick={() => window.location.href = '/'}>
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;