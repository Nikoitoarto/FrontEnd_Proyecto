import React from 'react';
import './sidebar.css'; // Importa estilos específicos para la barra lateral

const Sidebar = ({ isOpen, toggleSidebar, onMenuClick}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="hamburger" onClick={toggleSidebar}>
        &#10006; {/* Ícono de menú hamburguesa */}
      </button>
      {isOpen && (
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => onMenuClick('home')}>Inicio</li>
            <li onClick={() => onMenuClick('teachingManagement')}>Gestion de Docencia</li>
            <li onClick={() => onMenuClick('logout')}>Cerrar Sesión</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;