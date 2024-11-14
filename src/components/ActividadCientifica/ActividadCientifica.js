import React, { useState } from 'react';
import './ActividadCientifica.css';

// Componente reutilizable para el formulario de actividad
const ActivityForm = ({ activities, selectedActivities, setSelectedActivities, activityType, errorMessages, setErrorMessages }) => {
    const handleActivityChange = (event) => {
        const selectedName = event.target.value;
        const selectedActivity = activities.find((actividad) => actividad.nombre === selectedName);
        if (selectedActivity) {
            const activityExistsInGestion = selectedActivities.some((act) => act.nombre === selectedActivity.nombre);
            if (!activityExistsInGestion) {
                setSelectedActivities([...selectedActivities, { ...selectedActivity, productosSeleccionados: [] }]);
            }
        }
    };

    const handleInputChange = (e, index, field) => {
        const value = e.target.value;
        const updatedActivities = [...selectedActivities];
        updatedActivities[index][field] = value;
        setSelectedActivities(updatedActivities);

        setErrorMessages((prev) => {
            const updatedErrors = { ...prev };
            if (value) {
                delete updatedErrors[`${activityType}-${field}-${index}`];
            } else {
                updatedErrors[`${activityType}-${field}-${index}`] = 'Este campo es requerido';
            }
            return updatedErrors;
        });
    };

    const handleProductSelect = (actividadIndex, selectedProduct) => {
        setSelectedActivities((prevActivities) => {
            const updatedActivities = [...prevActivities];
            const actividad = updatedActivities[actividadIndex];
            if (actividad.productos && !actividad.productosSeleccionados.includes(selectedProduct)) {
                actividad.productosSeleccionados.push(selectedProduct);
            }
            return updatedActivities;
        });

        setErrorMessages((prev) => {
            const updatedErrors = { ...prev };
            if (selectedActivities[actividadIndex].productosSeleccionados.length > 0) {
                delete updatedErrors[`${activityType}-productosSeleccionados-${actividadIndex}`];
            } else {
                updatedErrors[`${activityType}-productosSeleccionados-${actividadIndex}`] = 'Debe seleccionar al menos un producto';
            }
            return updatedErrors;
        });
    };

    const totalHorasSemanales = selectedActivities.reduce((total, actividad) => {
        return total + (parseFloat(actividad.horasSemanales) || 0);
    }, 0);

    const totalHorasSemestre = selectedActivities.reduce((total, actividad) => {
        return total + (parseFloat(actividad.horasSemestre) || 0);
    }, 0);

    return (
        <div className="actividad-contenedor">
            <form className={`${activityType}-form`}>
                <div className="form-group">
                    <label>Actividad Científica:</label>
                    <select onChange={handleActivityChange} className="input-select">
                        <option value="">Seleccionar</option>
                        {activities.map((actividad) => (
                            <option key={actividad.nombre} value={actividad.nombre}>
                                {actividad.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="table-container">
                    <table className="activity-table">
                        <thead>
                            <tr>
                                <th>Actividad</th>
                                <th>Dedicación (Horas semanales)</th>
                                <th>Dedicación (Horas Semestre)</th>
                                <th>Descripción</th>
                                <th>Producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedActivities.map((actividad, index) => (
                                <tr key={index}>
                                    <td>{actividad.nombre}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={actividad.horasSemanales || ''}
                                            onChange={(e) => handleInputChange(e, index, 'horasSemanales')}
                                            min="0"
                                            max="46"
                                        />
                                        {errorMessages[`cientifica-horasSemanales-${index}`] && (
                                            <span className="error-message">
                                                {errorMessages[`cientifica-horasSemanales-${index}`]}
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={actividad.horasSemestre || ''}
                                            onChange={(e) => handleInputChange(e, index, 'horasSemestre')}
                                            min="0"
                                            max="46"
                                        />
                                        {errorMessages[`cientifica-horasSemestre-${index}`] && (
                                            <span className="error-message">
                                                {errorMessages[`cientifica-horasSemestre-${index}`]}
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <textarea
                                            value={actividad.descripcion || ''}
                                            onChange={(e) => handleInputChange(e, index, 'descripcion')}
                                        />
                                        {errorMessages[`cientifica-descripcion-${index}`] && (
                                            <span className="error-message">
                                                {errorMessages[`cientifica-descripcion-${index}`]}
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <select onChange={(e) => handleProductSelect(index, e.target.value)} className="input-select">
                                            <option value="">Seleccionar</option>
                                            {actividad.productos.map((producto, productIndex) => (
                                                <option key={productIndex} value={producto}>
                                                    {producto}
                                                </option>
                                            ))}
                                        </select>
                                        <ul>
                                            {actividad.productosSeleccionados.map((producto, productIndex) => (
                                                <li key={productIndex}>{producto}</li>
                                            ))}
                                        </ul>
                                        {errorMessages[`cientifica-productosSeleccionados-${index}`] && (
                                            <span className="error-message">
                                                {errorMessages[`cientifica-productosSeleccionados-${index}`]}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="1">
                                    <strong>Total de horas</strong>
                                </td>
                                <td>{totalHorasSemanales}</td>
                                <td>{totalHorasSemestre}</td>
                                <td colSpan="2"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </form>
        </div>
    );
};

const ActividadCientifica = ({changeView}) => 
{
    const [selectedActivitiesCientifica, setSelectedActivitiesCientifica] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const [isPreviewDisabled, setIsPreviewDisabled] = useState(false);
  
    const handleNext = () => {
      if (isNextDisabled) return;
      changeView('actividadCientifica', 'next');
      
    };
  
    const handlePreview = () => {
      if (isPreviewDisabled) return;
      changeView('actividadCientifica', 'preview');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Formulario enviado con éxito');
            setMessage('Los datos han sido guardados correctamente');
        } else {
            setMessage('Verifique que todos los campos estén llenos');
        }
    };

    const validateForm = () => {
        const errores = {};
        selectedActivitiesCientifica.forEach((actividad, index) => {
            if (!actividad.horasSemanales) {
                errores[`cientifica-horasSemanales-${index}`] = 'Este campo es requerido';
            }
            if (!actividad.horasSemestre) {
                errores[`cientifica-horasSemestre-${index}`] = 'Este campo es requerido';
            }
            if (!actividad.descripcion) {
                errores[`cientifica-descripcion-${index}`] = 'Este campo es requerido';
            }
            if (actividad.productosSeleccionados.length === 0) {
                errores[`cientifica-productosSeleccionados-${index}`] = 'Debe seleccionar al menos un producto';
            }
        });
        setErrorMessages(errores);
        return Object.keys(errores).length === 0;
    };

    const productosOpciones = [
        'Syllabus de la asignatura',
        'Material educativo',
        'Informes de tutoría grupal en el curso',
        'Informe de actividades realizadas en cada encuentro académico en un acta',
        'Registros fotográficos',
        'Diapositivas para cada sesión',
        'Desarrollo de guías para generar iniciativas documentos relacionados',
        'Proyectos formulados por los estudiantes',
        'Informes para el desarrollo de las actividades',
        'Informes de avances de proyectos',
        'Informes a la dirección de la unidad el profesor',
        'Evidencias de las actividades de sesión',
        'Talleres, tareas, pruebas y debates',
        'Evaluación formativa y sumativa para el aprendizaje autónomo colaborativo',
        'Formatos de asistencia o colaborativos',
        'Pruebas en clase para la evaluación formativa y del aprendizaje.',
    ];

    const actividadesCientifica = [
        { nombre: 'Gestión de semilleros', productos: productosOpciones, productosSeleccionados: [] },
        { nombre: 'Evaluación de aprendizaje a estudiantes', productos: productosOpciones, productosSeleccionados: [] },
        { nombre: 'Gestión de eventos académicos', productos: productosOpciones, productosSeleccionados: [] },
    ];

    const isFormValid = selectedActivitiesCientifica.length > 0;

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <ActivityForm
                    activities={actividadesCientifica}
                    selectedActivities={selectedActivitiesCientifica}
                    setSelectedActivities={setSelectedActivitiesCientifica}
                    activityType="cientifica"
                    errorMessages={errorMessages}
                    setErrorMessages={setErrorMessages}
                />
                <div className="form-button-container">
                    <button 
                        type="button"
                        className={`form-button ${isPreviewDisabled ? "disabled-button" : ""}`}
                        onClick={handlePreview}>
                            Regresar
                    </button>
                    <button type="submit" className="form-button guardar" disabled={!isFormValid}>
                        Guardar
                    </button>
                    <button 
                        type="button"
                        className={`form-button ${isNextDisabled ? "disabled-button" : ""}`}
                        onClick={handleNext}>
                            Siguiente
                    </button>
                </div>
                {message && (
                    <div className={message === 'Los datos han sido guardados correctamente' ? 'success-message' : 'error-message'}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ActividadCientifica;
