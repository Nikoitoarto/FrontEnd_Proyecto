import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form_agenda.css';

function FormAgenda() {
    const [asignatura, setAsignatura] = useState('');
    const [programa, setPrograma] = useState('');
    const [programaSeleccionado, setProgramaSeleccionado] = useState('');
    const [grupo, setGrupo] = useState('');
    const [sede, setSede] = useState('');
    const [dedicacionSemanal, setDedicacionSemanal] = useState('');
    const [dedicacionSemestre, setDedicacionSemestre] = useState('');

    const handleAsignaturaChange = (event) => {
        setAsignatura(event.target.value);
    };

    const handleProgramaChange = (event) => {
        setPrograma(event.target.value);
    };

    const handleProgramaSeleccionadoChange = (event) => {
        setProgramaSeleccionado(event.target.value);
    };

    const handleGrupoChange = (event) => {
        setGrupo(event.target.value);
    };

    const handleSedeChange = (event) => {
        setSede(event.target.value);
    };

    const handleDedicacionSemanalChange = (event) => {
        setDedicacionSemanal(event.target.value);
    };

    const handleDedicacionSemestreChange = (event) => {
        setDedicacionSemestre(event.target.value);
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="header-title">Formulario Agenda</h1>
                <img
                    src="https://corhuila.edu.co/wp-content/uploads/2021/03/logo-cuadrado-blanco.png"
                    alt="Logo"
                    className="header-logo"
                />
            </header>
            <div className="menu-body">
                <div className="menu-sidebar">
                    <div className="dropdown-menu">
                        <Link to="/entrada" className="menu-option">Entrada</Link>
                        <Link to="/pendientes" className="menu-option">Pendientes</Link>
                        <Link to="/formulario-agenda" className="menu-option">Formulario Agenda</Link>
                        <Link to="/seguimiento" className="menu-option">Seguimiento</Link>
                    </div>
                </div>
                <div className="menu-content">
                    <div className="form-section">
                        <div className="info-box">
                            <h2>AGENDA SEMESTRAL PROFESORAL</h2>
                            <div className="input-box">
                                <form className="agenda-form">
                                    <div className="form-row">
                                        <div className="combined-inputs">
                                            <div className="form-row">
                                                <label htmlFor="docente">DOCENTE:</label>
                                                <input type="text" id="docente" name="docente" placeholder="Escribe el nombre del docente" />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="programa">PROGRAMA:</label>
                                                <select id="programa" name="programa" value={programa} onChange={handleProgramaChange} className="primary-select">
                                                    <option value="">Selecciona la Ingeniería</option>
                                                    <option value="ingenieria-sistemas">Ingeniería Sistemas</option>
                                                    <option value="ingenieria-ambiental">Ingeniería Ambiental</option>
                                                    <option value="ingenieria-industrial">Ingeniería Industrial</option>
                                                    <option value="ingenieria-mecatronica">Ingeniería Mecatrónica</option>
                                                    <option value="ingenieria-energia-renovables">Ingeniería Energía Renovables</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="combined-inputs">
                                            <div className="form-row">
                                                <label htmlFor="facultad">FACULTAD:</label>
                                                <select id="facultad" name="facultad" className="primary-select">
                                                    <option value="">Selecciona la Facultad</option>
                                                    <option value="ingenieria">Facultad de Ingeniería</option>
                                                    <option value="ciencias-economicas">Facultad de Ciencias Económicas y Administrativas</option>
                                                    <option value="medicina-veterinaria">Facultad de Medicina Veterinaria y Ciencias Afines</option>
                                                </select>
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="periodo">PERIODO:</label>
                                                <input type="text" id="periodo" name="periodo" placeholder="Escribe el periodo académico" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="date">Fecha:</label>
                                        <input type="date" id="date" name="date" />
                                    </div>
                                </form>
                            </div>
                            <h2 className="docencia-title">LABORES DE DOCENCIA, ACADEMICAS Y FORMATIVAS</h2>
                            <div className="additional-box">
                                <div className="form-row">
                                    <label htmlFor="asignatura">Asignatura:</label>
                                    <select id="asignatura" name="asignatura" value={asignatura} onChange={handleAsignaturaChange}>
                                        <option value="">Selecciona una asignatura</option>
                                        <option value="matematicas">Matemáticas</option>
                                        <option value="fisica">Física</option>
                                        <option value="quimica">Química</option>
                                        <option value="programacion">Programación</option>
                                        <option value="ingles">Inglés</option>
                                    </select>
                                </div>
                                {asignatura && (
                                    <div className="selected-asignatura">
                                        <p><strong>{asignatura}</strong></p>
                                    </div>
                                )}
                                <div className="label-input-row">
                                    <label htmlFor="programa-label">Programa</label>
                                    <label htmlFor="grupo-label">Grupo</label>
                                    <label htmlFor="sede-label">Sede</label>
                                    <label htmlFor="dedicacion-semanal-label">Dedicación Semanales</label>
                                    <label htmlFor="dedicacion-semestre-label">Dedicación Semestre</label>
                                </div>
                                <div className="form-row">
                                    <select id="programa-opciones" name="programa-opciones" value={programaSeleccionado} onChange={handleProgramaSeleccionadoChange} className="secondary-select">
                                        <option value="">Selecciona el Programa</option>
                                        <option value="sistemas">Sistemas</option>
                                        <option value="ambiental">Ambiental</option>
                                        <option value="mecatronica">Mecatrónica</option>
                                        <option value="energia-renovables">Renovables</option>
                                    </select>
                                    <select id="grupo" name="grupo" value={grupo} onChange={handleGrupoChange} className="secondary-select">
                                        <option value="">Selecciona el grupo</option>
                                        <option value="grupo1">1</option>
                                        <option value="grupo2">2</option>
                                        <option value="grupo3">3</option>
                                    </select>
                                    <select id="sede" name="sede" value={sede} onChange={handleSedeChange} className="secondary-select">
                                        <option value="">Selecciona la Sede</option>
                                        <option value="prado-alto">Prado Alto</option>
                                        <option value="quirinal">Quirinal</option>
                                    </select>
                                    <input type="number" id="dedicacion-semanal" placeholder="Horas semanales" min="0" value={dedicacionSemanal} onChange={handleDedicacionSemanalChange} />
                                    <input type="number" id="dedicacion-semestre" placeholder="Horas semestre" min="0" value={dedicacionSemestre} onChange={handleDedicacionSemestreChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAgenda;
