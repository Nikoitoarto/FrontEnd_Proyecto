import './semiannual-agenda.css'
import TeacherData from 'components/TeacherData';
import Asignatura from 'components/Asignatura';
import ActividadFormativa from 'components/ActividadFormativa';
import ActividadCientifica from 'components/ActividadCientifica';
import ActividadCultural from 'components/ActividadCultural';
import ActividadGestion from 'components/ActividadGestion';
import React, { useState } from 'react';

const SemiannualAgenda = () => {

    const [activeComponent, setActiveComponent] = useState('teacherData');
    const changeView = (currentForm, navigateAction) => {
        switch (currentForm) {
            case "teacherData":
                if(navigateAction == "next") {
                    setActiveComponent("asignaturaDocencia");
                } else if (navigateAction == "preview") {
                    console.log("No contiene esta navegacion: " + navigateAction);
                }
                break;
            case "asignaturaDocencia":
                if(navigateAction == "next") {
                    setActiveComponent("actividadesFormativa");
                } else if (navigateAction == "preview") {
                    setActiveComponent("teacherData");
                }
                break;
            case "actividadesFormativa":
                if(navigateAction == "next") {
                    setActiveComponent("actividadCientifica");
                } else if (navigateAction == "preview") {
                    setActiveComponent("asignaturaDocencia");
                }
                break;
            case "actividadCientifica":
                if(navigateAction == "next") {
                    setActiveComponent("actividadCultural");
                } else if (navigateAction == "preview") {
                    setActiveComponent("actividadesFormativa");
                }
                break;
            case "actividadCultural":
                if(navigateAction == "next") {
                    setActiveComponent("actividadGestion");
                } else if (navigateAction == "preview") {
                    setActiveComponent("actividadCientifica");
                }
                break;
            case "actividadGestion":
                if(navigateAction == "next") {
                    console.log("No contiene esta navegacion: " + navigateAction);
                } else if (navigateAction == "preview") {
                    setActiveComponent("actividadCultural");
                }
                break;
        }
    }
    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'actividadGestion':
                return <ActividadGestion changeView={changeView}/>
            case 'actividadCultural':
                return <ActividadCultural changeView={changeView}/>
            case 'actividadCientifica':
                return <ActividadCientifica changeView={changeView}/>
            case 'actividadesFormativa':
                return <ActividadFormativa changeView={changeView}/>
            case 'asignaturaDocencia':
                return <Asignatura changeView={changeView}/>
            case 'teacherData':
            default:
                return <TeacherData changeView={changeView}/>;
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