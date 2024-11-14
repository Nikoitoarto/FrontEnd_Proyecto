// Asignatura.js
import React, { useState, useEffect } from 'react';
import './asignatura.css';

// Componente para el formulario de asignatura
const AsignaturaForm = ({ activities, selectedActivities, setSelectedActivities, changeView}) => {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [totalHorasSemanales, setTotalHorasSemanales] = useState(0);
  const [totalHorasSemestre, setTotalHorasSemestre] = useState(0);

  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isPreviewDisabled, setIsPreviewDisabled] = useState(false);

  const handleNext = () => {
    if (isNextDisabled) return;
    changeView('asignaturaDocencia', 'next');
    
  };

  const handlePreview = () => {
    if (isPreviewDisabled) return;
    changeView('asignaturaDocencia', 'preview');
  };


  // Calcula las sumas de las horas
  useEffect(() => {
    const totalSemanales = selectedActivities.reduce((sum, actividad) => sum + (parseFloat(actividad.horasSemanales) || 0), 0);
    const totalSemestre = selectedActivities.reduce((sum, actividad) => sum + (parseFloat(actividad.horasSemestre) || 0), 0);
    setTotalHorasSemanales(totalSemanales);
    setTotalHorasSemestre(totalSemestre);
  }, [selectedActivities]);

  const handleActivityChange = (event) => {
    const selectedName = event.target.value;
    const selectedActivity = activities.find((actividad) => actividad.nombre === selectedName);
    if (selectedActivity && !selectedActivities.includes(selectedActivity)) {
      setSelectedActivities([...selectedActivities, selectedActivity]);
    }
  };

  const handleInputChange = (e, index, field) => {
    const value = e.target.value;
    const updatedActivities = [...selectedActivities];
    updatedActivities[index][field] = value;
    setSelectedActivities(updatedActivities);

    setErrorMessages((prev) => ({
      ...prev,
      [`${field}-${index}`]: value ? '' : 'Este campo es requerido',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: Verifica que todos los campos estén llenos
    let valid = true;
    let newErrorMessages = {};
    selectedActivities.forEach((actividad, index) => {
      ['programa', 'grupo', 'sede', 'horasSemanales', 'horasSemestre'].forEach((field) => {
        if (!actividad[field]) {
          valid = false;
          newErrorMessages[`${field}-${index}`] = 'Este campo es requerido';
        }
      });
    });

    setErrorMessages(newErrorMessages);

    if (valid) {
      setSuccessMessage('Los datos han sido guardados correctamente');
      setErrorMessage('');
      console.log('Datos guardados:', selectedActivities);
      // Aquí podrías agregar la lógica para guardar o enviar los datos
    } else {
      setSuccessMessage('');
      setErrorMessage('Verifique que todos los campos estén llenos');
    }
  };

  return (
    <div className="asignatura-container">
      <form className="asignatura-form">
        <div className="form-group">
          <label>Asignatura:</label>
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
                <th>Asignatura</th>
                <th>Programa</th>
                <th>Grupo</th>
                <th>Sede</th>
                <th>Dedicación (Horas semanales)</th>
                <th>Dedicación (Horas Semestre)</th>
              </tr>
            </thead>
            <tbody>
              {selectedActivities.map((actividad, index) => (
                <tr key={index}>
                  <td>{actividad.nombre}</td>
                  <td>
                    <select
                      value={actividad.programa || ''}
                      onChange={(e) => handleInputChange(e, index, 'programa')}
                      className="input-select"
                    >
                      <option value="">Seleccionar</option>
                      <option value="Ingeniería Sistemas">Ingeniería Sistemas</option>
                      <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
                      <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                      <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                      <option value="Ingeniería Energía Renovables">Ingeniería Energía Renovables</option>
                    </select>
                    {errorMessages[`programa-${index}`] && (
                      <span className="error-message">{errorMessages[`programa-${index}`]}</span>
                    )}
                  </td>
                  <td>
                    <select
                      value={actividad.grupo || ''}
                      onChange={(e) => handleInputChange(e, index, 'grupo')}
                      className="input-select"
                    >
                      <option value="">Seleccionar</option>
                      <option value="Grupo-1">Grupo-1</option>
                      <option value="Grupo-2">Grupo-2</option>
                      <option value="Grupo-3">Grupo-3</option>
                      <option value="Grupo-4">Grupo-4</option>
                    </select>
                    {errorMessages[`grupo-${index}`] && (
                      <span className="error-message">{errorMessages[`grupo-${index}`]}</span>
                    )}
                  </td>
                  <td>
                    <select
                      value={actividad.sede || ''}
                      onChange={(e) => handleInputChange(e, index, 'sede')}
                      className="input-select"
                    >
                      <option value="">Seleccionar</option>
                      <option value="Prado Alto">Prado Alto</option>
                      <option value="Quirinal">Quirinal</option>
                    </select>
                    {errorMessages[`sede-${index}`] && (
                      <span className="error-message">{errorMessages[`sede-${index}`]}</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input
                      type="number"
                      value={actividad.horasSemanales || ''}
                      onChange={(e) => handleInputChange(e, index, 'horasSemanales')}
                      min="0"
                      max="46"
                      className="centered-input"
                    />
                    {errorMessages[`horasSemanales-${index}`] && (
                      <span className="error-message">{errorMessages[`horasSemanales-${index}`]}</span>
                    )}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <input
                      type="number"
                      value={actividad.horasSemestre || ''}
                      onChange={(e) => handleInputChange(e, index, 'horasSemestre')}
                      min="0"
                      max="46"
                      className="centered-input"
                    />
                    {errorMessages[`horasSemestre-${index}`] && (
                      <span className="error-message">{errorMessages[`horasSemestre-${index}`]}</span>
                    )}
                  </td>
                </tr>
              ))}
              {/* Fila para mostrar la suma total de horas */}
              <tr>
                <td colSpan="4" style={{ fontWeight: 'bold', textAlign: 'right' }}>Total de horas</td>
                <td style={{ textAlign: 'center' }}>
                  <input
                    type="number"
                    value={totalHorasSemanales}
                    readOnly
                    className="centered-input"
                    style={{ textAlign: 'center' }}
                  />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <input
                    type="number"
                    value={totalHorasSemestre}
                    readOnly
                    className="centered-input"
                    style={{ textAlign: 'center' }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
            onClick={handleSubmit}
            disabled={selectedActivities.length === 0}  // Deshabilitar si no hay asignaturas seleccionadas
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
      </form>

      {/* Mensaje de éxito o error */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

const Asignatura = ({changeView}) => 
{
  const [selectedActivities, setSelectedActivities] = useState([]);

  const actividades = [
    { nombre: 'Programación I', programa: '', grupo: '', sede: '', horasSemanales: '', horasSemestre: '' },
    { nombre: 'Programación II', programa: '', grupo: '', sede: '', horasSemanales: '', horasSemestre: '' },
    { nombre: 'Programación III', programa: '', grupo: '', sede: '', horasSemanales: '', horasSemestre: '' },
    { nombre: 'Sistemas Distribuidos', programa: '', grupo: '', sede: '', horasSemanales: '', horasSemestre: '' },
    { nombre: 'Electiva I', programa: '', grupo: '', sede: '', horasSemanales: '', horasSemestre: '' },
    { nombre: 'Electiva II', programa: '', grupo: '', sede: '', horasSemanales: '', horasSemestre: '' },
  ];

  return (
    <div>
      <AsignaturaForm
        activities={actividades}
        selectedActivities={selectedActivities}
        setSelectedActivities={setSelectedActivities}
        changeView={changeView}
      />
    </div>
  );
};

export default Asignatura;
