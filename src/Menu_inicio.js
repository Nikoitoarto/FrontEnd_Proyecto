import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import './Menu_inicio.css'; // Importa el archivo de estilos

function MenuInicio() {
    const navigate = useNavigate(); // Hook para manejar la navegación

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="header-title">Inicio</h1>
                <img 
                    src="https://corhuila.edu.co/wp-content/uploads/2021/03/logo-cuadrado-blanco.png" 
                    alt="Logo"
                    className="header-logo" 
                />
            </header>
            <div className="menu-body">
                <div className="menu-sidebar">
                    <div className="dropdown-menu">
                        <button className="menu-option" onClick={() => navigate('/entrada')}>Entrada</button>
                        <button className="menu-option" onClick={() => navigate('/pendientes')}>Pendientes</button>
                        <button className="menu-option" onClick={() => navigate('/formulario-agenda')}>Formulario Agenda</button>
                        <button className="menu-option" onClick={() => navigate('/seguimiento')}>Seguimiento</button>
                    </div>
                </div>
                <div className="menu-content">
                    <div className="welcome-section">
                        <h2>Bienvenido a la Corporación Universitaria del Huila - CORHUILA</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuInicio;
