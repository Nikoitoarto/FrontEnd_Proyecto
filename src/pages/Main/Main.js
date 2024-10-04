import React, { useState } from 'react';
import './main.css'
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import AgendaForm from 'components/AgendaForm';

const Main = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [menuItem, setMenuItem] = useState('home');
    
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    const handleMenuClick = (itemName) => {
        setMenuItem(itemName); // Actualiza el componente activo
        toggleSidebar();
    };
    const renderActiveComponent = () => {
        switch (menuItem) {
            case 'agendaForm':
                return <AgendaForm />;
            case 'home':
            default:
                return (
                    <div>
                        <h2>Bienvenido a la página principal</h2>
                        <p>Este es el contenido principal de la aplicación chicos.</p>
                    </div>
                );
        }
    };
    return (
        <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onMenuClick={handleMenuClick} />
            <main className="content">
                {renderActiveComponent()} {/* Renderiza el componente activo */}
            </main>
            <Footer />
        </div>
    );
}

export default Main;