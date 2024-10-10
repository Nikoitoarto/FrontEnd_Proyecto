import './semiannual-agenda.css'
import TeacherData from 'components/TeacherData';
import React, { useState } from 'react';

const SemiannualAgenda = () => {

    const [activeComponent, setActiveComponent] = useState('teacherData');
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'teacherData':
            default:
                return <TeacherData />;
        }
    };
    return (
        <div className='sa-agenda-container'>
            <h3 className='sa-agenda-title'>
                Gestion de Agenda Semestral
            </h3>
            <div className='sa-agenda-component'>
                {renderActiveComponent()} {/* Renderiza el componente basado en el estado */}
            </div>
        </div>
    );
};

export default SemiannualAgenda;