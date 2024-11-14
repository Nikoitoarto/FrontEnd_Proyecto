import React, { useState } from 'react';
import './actividad-formativa.css';

// Componente reutilizable para el formulario de actividad
const ActivityForm = ({
  activities,
  selectedActivities,
  setSelectedActivities,
  activityType,
  errorMessages,
  setErrorMessages,
  selectedActivitiesAcademicas,
  selectedActivitiesFormativas
}) => {
  const handleActivityChange = (event) => {
    const selectedName = event.target.value;
    const selectedActivity = activities.find((actividad) => actividad.nombre === selectedName);

    if (selectedActivity) {
      const activityExistsInAcademicas = selectedActivitiesAcademicas.some(
        (act) => act.nombre === selectedActivity.nombre
      );
      const activityExistsInFormativas = selectedActivitiesFormativas.some(
        (act) => act.nombre === selectedActivity.nombre
      );

      if (!activityExistsInAcademicas && !activityExistsInFormativas) {
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
      }
      return updatedErrors;
    });
  };

  // Cálculos de totales de horas
  const totalHorasSemanales = selectedActivities.reduce((total, actividad) => {
    return total + (parseFloat(actividad.horasSemanales) || 0);
  }, 0);

  const totalHorasSemestre = selectedActivities.reduce((total, actividad) => {
    return total + (parseFloat(actividad.horasSemestre) || 0);
  }, 0);

  return (
    <div className="activity-container">
      <form className={`${activityType}-form`}>
        <div className="form-group">
          <label>{`Actividad ${activityType === 'academica' ? 'Académica' : 'Formativa'}`}:</label>
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
                <th>{`Actividad ${activityType === 'academica' ? 'Académica' : 'Formativa'}`}</th>
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
                    {errorMessages[`${activityType}-horasSemanales-${index}`] && (
                      <span className="error-message">{errorMessages[`${activityType}-horasSemanales-${index}`]}</span>
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
                    {errorMessages[`${activityType}-horasSemestre-${index}`] && (
                      <span className="error-message">{errorMessages[`${activityType}-horasSemestre-${index}`]}</span>
                    )}
                  </td>
                  <td>
                    <textarea
                      value={actividad.descripcion || ''}
                      onChange={(e) => handleInputChange(e, index, 'descripcion')}
                    />
                    {errorMessages[`${activityType}-descripcion-${index}`] && (
                      <span className="error-message">{errorMessages[`${activityType}-descripcion-${index}`]}</span>
                    )}
                  </td>
                  <td>
                    <select
                      onChange={(e) => handleProductSelect(index, e.target.value)}
                      className="input-select"
                    >
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
                    {errorMessages[`${activityType}-productosSeleccionados-${index}`] && (
                      <span className="error-message">{errorMessages[`${activityType}-productosSeleccionados-${index}`]}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="1"><strong>Total de horas</strong></td>
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

const ActividadFormativa =({changeView}) => 
{
  const [selectedActivitiesAcademicas, setSelectedActivitiesAcademicas] = useState([]);
  const [selectedActivitiesFormativas, setSelectedActivitiesFormativas] = useState([]);
  const [message, setMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isPreviewDisabled, setIsPreviewDisabled] = useState(false);

  const handleNext = () => {
    if (isNextDisabled) return;
    changeView('actividadesFormativa', 'next');
    
  };

  const handlePreview = () => {
    if (isPreviewDisabled) return;
    changeView('actividadesFormativa', 'preview');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado con éxito");
      setMessage("Los datos han sido guardados correctamente");
    } else {
      setMessage("Verifique que todos los campos estén llenos");
    }
  };

  const validateForm = () => {
    const errors = {};

    selectedActivitiesAcademicas.forEach((actividad, index) => {
      if (!actividad.horasSemanales) {
        errors[`academica-horasSemanales-${index}`] = 'Este campo es requerido';
      }
      if (!actividad.horasSemestre) {
        errors[`academica-horasSemestre-${index}`] = 'Este campo es requerido';
      }
      if (!actividad.descripcion) {
        errors[`academica-descripcion-${index}`] = 'Este campo es requerido';
      }
      if (actividad.productosSeleccionados.length === 0) {
        errors[`academica-productosSeleccionados-${index}`] = 'Debe seleccionar al menos un producto';
      }
    });

    selectedActivitiesFormativas.forEach((actividad, index) => {
      if (!actividad.horasSemanales) {
        errors[`formativa-horasSemanales-${index}`] = 'Este campo es requerido';
      }
      if (!actividad.horasSemestre) {
        errors[`formativa-horasSemestre-${index}`] = 'Este campo es requerido';
      }
      if (!actividad.descripcion) {
        errors[`formativa-descripcion-${index}`] = 'Este campo es requerido';
      }
      if (actividad.productosSeleccionados.length === 0) {
        errors[`formativa-productosSeleccionados-${index}`] = 'Debe seleccionar al menos un producto';
      }
    });

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
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

  const actividadesAcademicas = [
    { nombre: 'Seminarios Académicos', productos: productosOpciones, productosSeleccionados: [] },
    { nombre: 'Estudios Independientes', productos: productosOpciones, productosSeleccionados: [] },
    { nombre: 'Proyectos de Investigación', productos: productosOpciones, productosSeleccionados: [] },
  ];

  const actividadesFormativas = [
    { nombre: 'Conferencias Especializadas', productos: productosOpciones, productosSeleccionados: [] },
    { nombre: 'Talleres Formativos', productos: productosOpciones, productosSeleccionados: [] },
    { nombre: 'Jornadas de Integración', productos: productosOpciones, productosSeleccionados: [] },
  ];

  const isFormValid = selectedActivitiesAcademicas.length > 0 || selectedActivitiesFormativas.length > 0;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <ActivityForm
          activities={actividadesAcademicas}
          selectedActivities={selectedActivitiesAcademicas}
          setSelectedActivities={setSelectedActivitiesAcademicas}
          activityType="academica"
          errorMessages={errorMessages}
          setErrorMessages={setErrorMessages}
          selectedActivitiesAcademicas={selectedActivitiesAcademicas}
          selectedActivitiesFormativas={selectedActivitiesFormativas}
        />
        <ActivityForm
          activities={actividadesFormativas}
          selectedActivities={selectedActivitiesFormativas}
          setSelectedActivities={setSelectedActivitiesFormativas}
          activityType="formativa"
          errorMessages={errorMessages}
          setErrorMessages={setErrorMessages}
          selectedActivitiesAcademicas={selectedActivitiesAcademicas}
          selectedActivitiesFormativas={selectedActivitiesFormativas}
        />

        <div className="form-button-container">
          <button 
              type="button"
              className={`form-button ${isPreviewDisabled ? "disabled-button" : ""}`}
              onClick={handlePreview}>
                  Regresar
          </button>
          <button
            type="submit"
            className="form-button guardar"
            disabled={!isFormValid}
          >
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

export default ActividadFormativa;
