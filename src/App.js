import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Importa el componente Login
import MenuInicio from './Menu_inicio'; // Importa el componente MenuInicio
//import Entrada from './Entrada'; // Importa el componente Entrada
//import Pendientes from './Pendientes';
import FormAgenda from './Form_agenda';
//import Seguimiento from './Seguimiento';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Ruta para el login */}
                <Route path="/menu" element={<MenuInicio />} /> {/* Ruta para el menú */}
                <Route path="/formulario-agenda" element={<FormAgenda />} />
                {/*<Route path="/entrada" element={<Entrada />} /> {/* Ruta para la página Entrada */}
                {/*<Route path="/pendientes" element={<Pendientes />} /> {/* Ruta para la página Pendientes */}
                {/*<Route path="/formulario-agenda" element={<FormularioAgenda />} /> {/* Ruta para la página Formulario Agenda */}
                {/*<Route path="/seguimiento" element={<Seguimiento />} /> {/* Ruta para la página Seguimiento */}
            </Routes>
        </Router>
    );
}
export default App;
