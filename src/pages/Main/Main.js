import React, { useState } from 'react';
import './main.css'
import { useAppContext } from 'context/AppContext';
import { localStorageClear } from 'utils/storage';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import AgendaForm from 'components/AgendaForm';
import Welcome from 'components/Welcome';
import SemiannualAgenda from 'pages/SemiannualAgenda';

const Main = ({setIsLoggedIn}) => {
    
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const [menuItem, setMenuItem] = useState('home');
    const { isLoading } = useAppContext();
    
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
            case 'teachingManagement':
                return <SemiannualAgenda />
            case 'logout':
                localStorageClear();
                setIsLoggedIn(false);
                navigate("/login");
                break
            case 'home':
            default:
               return <Welcome/>;
        }
    };
    return (
        <>
        {isLoading && <Loader />} {/* Muestra el loader si isLoading es true */}
            <div className={`main-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <Header toggleSidebar={toggleSidebar} />
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onMenuClick={handleMenuClick} />
                <main className="content">
                    {renderActiveComponent()} {/* Renderiza el componente activo */}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Main;