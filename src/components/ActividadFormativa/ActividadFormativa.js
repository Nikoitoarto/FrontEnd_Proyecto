import React, { useState, useEffect } from 'react';
import './actividad-formativa.css';
const ActividadFormativa = () => {
  const [nuevoSelectedActivities, setNuevoSelectedActivities] = useState([]);
  const [nuevoErrorMessages, setNuevoErrorMessages] = useState({});
  const [nuevoActividades] = useState([ 
    {
      nombree: 'Preparación de Clases',
      horaSemanal: 0,
      horaSemestre: 0,
      descripcioon: '',
      productoo: [
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
        'Pruebas en clase para la evaluación formativa y del aprendizaje',
      ],
      productosSeleccionados: [], // Inicialmente vacío
    },
    {
      nombree: 'Evaluación de Aprendizajes a Estudiantes',
      horaSemanal: 0,
      horaSemestre: 0,
      descripcioon: '',
      productoo: [
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
        'Pruebas en clase para la evaluación formativa y del aprendizaje',
      ],
      productosSeleccionados: [], // Inicialmente vacío
    },
    {
      nombree: 'Gestión de Eventos Académicos',
      horaSemanal: 0,
      horaSemestre: 0,
      descripcioon: '',
      productoo: [
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
        'Pruebas en clase para la evaluación formativa y del aprendizaje',
      ],
      productosSeleccionados: [], // Inicialmente vacío
    },
  ]);
  const [nuevoTotalHorasSemanales, setNuevoTotalHorasSemanales] = useState(0);
  const [nuevoTotalHorasSemestre, setNuevoTotalHorasSemestre] = useState(0);
  useEffect(() => {
    const newTotalSemanal = nuevoSelectedActivities.reduce((sum, act) => sum + Number(act.horasSemanales), 0);
    const newTotalSemestre = nuevoSelectedActivities.reduce((sum, act) => sum + Number(act.horasSemestre), 0);
    setNuevoTotalHorasSemanales(newTotalSemanal);
    setNuevoTotalHorasSemestre(newTotalSemestre);
  }, [nuevoSelectedActivities]);
  const handleNuevoActivityChange = (event) => {
    const selectedName = event.target.value;
    if (selectedName === '') {
      setNuevoSelectedActivities([]);
    } else {
      const selectedActivity = nuevoActividades.find((actividad) => actividad.nombree === selectedName);
      if (selectedActivity && !nuevoSelectedActivities.includes(selectedActivity)) {
        setNuevoSelectedActivities([...nuevoSelectedActivities, selectedActivity]);
      }
    }
  };
  const handleNuevoProductSelect = (actividadIndex, selectedProduct) => {
    setNuevoSelectedActivities((prevActivities) => {
      const updatedActivities = [...prevActivities];
      const actividad = updatedActivities[actividadIndex];
      if (actividad.productoo) {
        if (!actividad.productosSeleccionados.includes(selectedProduct)) {
          actividad.productosSeleccionados.push(selectedProduct);
        }
      }
      return updatedActivities;
    });
  };
  const handleNuevoInputChange = (e, index, field) => {
    let value = e.target.value;
    if (value.length > 2) {
      value = value.slice(0, 2); 
    }
    const numericValue = parseInt(value, 10);
    const updatedActivities = [...nuevoSelectedActivities];
    updatedActivities[index][field] = isNaN(numericValue) ? 0 : numericValue;
    setNuevoSelectedActivities(updatedActivities);
    setNuevoErrorMessages((prev) => ({
      ...prev,
      [`${field}-${index}`]: numericValue > 46 ? 'No mayor a 46' : '',
    }));
  };
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const [actividades] = useState([ 
    {
      nombre: 'Acompañamiento Académico',
      horasSemanales: 0,
      horasSemestre: 0,
      descripcion: '',
      producto: [
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
        'Pruebas en clase para la evaluación formativa y del aprendizaje',
      ],
      productosSeleccionados: [], // Inicialmente vacío
    },
    {
      nombre: 'Cursos de Fortalecimiento',
      horasSemanales: 0,
      horasSemestre: 0,
      descripcion: '',
      producto: [
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
        'Pruebas en clase para la evaluación formativa y del aprendizaje',
      ],
      productosSeleccionados: [], // Inicialmente vacío
    },
    {
      nombre: 'Asesoría en Emprendimiento',
      horasSemanales: 0,
      horasSemestre: 0,
      descripcion: '',
      producto: [
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
        'Pruebas en clase para la evaluación formativa y del aprendizaje',
      ],
      productosSeleccionados: [], // Inicialmente vacío
    },
  ]);
  const [totalHorasSemanales, setTotalHorasSemanales] = useState(0);
  const [totalHorasSemestre, setTotalHorasSemestre] = useState(0);
  useEffect(() => {
    const newTotalSemanal = selectedActivities.reduce((sum, act) => sum + Number(act.horasSemanales), 0);
    const newTotalSemestre = selectedActivities.reduce((sum, act) => sum + Number(act.horasSemestre), 0);
    setTotalHorasSemanales(newTotalSemanal);
    setTotalHorasSemestre(newTotalSemestre);
  }, [selectedActivities]);
  const handleActivityChange = (event) => {
    const selectedName = event.target.value;
    if (selectedName === '') {
      setSelectedActivities([]);
    } else {
      const selectedActivity = actividades.find((actividad) => actividad.nombre === selectedName);
      if (selectedActivity && !selectedActivities.includes(selectedActivity)) {
        setSelectedActivities([...selectedActivities, selectedActivity]);
      }
    }
  };
  const handleProductSelect = (actividadIndex, selectedProduct) => {
  setSelectedActivities((prevActivities) => {
    const updatedActivities = [...prevActivities];
    const actividad = updatedActivities[actividadIndex];
    // Verifica si es del formulario de Actividad Académica o Actividad Formativa
    if (actividad.producto) {
      // Si es Actividad Académica, solo permite seleccionar en el formulario académico
      if (!actividad.productosSeleccionados.includes(selectedProduct)) {
        actividad.productosSeleccionados.push(selectedProduct);
      }
    } else if (actividad.producto) {
      // Si es Actividad Formativa, solo permite seleccionar en el formulario formativo
      if (!actividad.productosSeleccionados.includes(selectedProduct)) {
        actividad.productosSeleccionados.push(selectedProduct);
      }
    }
    return updatedActivities;
  });
};
  const handleInputChange = (e, index, field) => {
    let value = e.target.value;
    // Validar que solo tenga dos dígitos
    if (value.length > 2) {
      value = value.slice(0, 2); // Limitar a dos caracteres
    }
    const numericValue = parseInt(value, 10);
    const updatedActivities = [...selectedActivities];
    updatedActivities[index][field] = isNaN(numericValue) ? 0 : numericValue;
    setSelectedActivities(updatedActivities);
    // Validación y mensaje de error
    setErrorMessages((prev) => ({
      ...prev,
      [`${field}-${index}`]: numericValue > 46 ? 'No mayor a 46' : '',
    }));
  };
  return (
    <div className="actividad-academica-container">
    <form className="actividad-academica-form">
      <div className="form-group">
        <label>Actividad Académica:</label>
        <select onChange={handleNuevoActivityChange} className="input-select">
          <option value="">Seleccionar</option>
          <option>Preparación de Clases</option>
          <option>Evaluación de Aprendizajes a Estudiantes</option>
          <option>Gestión de Eventos Académicos</option>
        </select>
      </div>
      <div className="table-container">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Actividad Académica</th>
              <th>Dedicación (Horas semanales)</th>
              <th>Dedicación (Horas Semestre)</th>
              <th>Descripción</th>
              <th>Producto</th>
            </tr>
          </thead>
          <tbody>
            {nuevoSelectedActivities.map((actividad, index) => (
              <tr key={index}>
                <td>{actividad.nombree}</td>
                <td>
                  <input
                    type="number"
                    value={actividad.horasSemanales}
                    onChange={(e) => handleNuevoInputChange(e, index, 'horasSemanales')}
                    min="0"
                    max="46"
                    maxLength="2"
                  />
                  {nuevoErrorMessages[`horasSemanales-${index}`] && (
                    <span className="error-message">{nuevoErrorMessages[`horasSemanales-${index}`]}</span>
                  )}
                </td>
                <td>
                  <input
                    type="number"
                    value={actividad.horasSemestre}
                    onChange={(e) => handleNuevoInputChange(e, index, 'horasSemestre')}
                    min="0"
                    max="46"
                    maxLength="2"
                  />
                  {nuevoErrorMessages[`horasSemestre-${index}`] && (
                    <span className="error-message">{nuevoErrorMessages[`horasSemestre-${index}`]}</span>
                  )}
                </td>
                <td>
                  <textarea
                    value={actividad.descripcioon}
                    onChange={(e) => {
                      const updatedActivities = [...nuevoSelectedActivities];
                      updatedActivities[index].descripcioon = e.target.value;
                      setNuevoSelectedActivities(updatedActivities);
                    }}
                  />
                </td>
                <td>
                  <select
                    onChange={(e) => handleNuevoProductSelect(index, e.target.value)}
                    className="input-select"
                  >
                    <option value="">Seleccionar producto</option>
                    {actividad.productoo && actividad.productoo.length > 0 ? (
                      actividad.productoo.map((productoo, productooIndex) => (
                        <option key={productooIndex} value={productoo}>
                          {productoo}
                        </option>
                      ))
                    ) : (
                      <option disabled>No hay productos disponibles</option>
                    )}
                  </select>
                  <ul>
                    {actividad.productosSeleccionados.map((productoo, productooIndex) => (
                      <li key={productooIndex}>{productoo}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total horas semanales:</td>
              <td>{nuevoTotalHorasSemanales}</td>
              <td>Total horas semestre:</td>
              <td>{nuevoTotalHorasSemestre}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </form>


    <div className="activity-container">
      <form className="activity-form">
        <div className="form-group">
          <label>Actividad Formativa:</label>
          <select onChange={handleActivityChange} className="input-select">
            <option value="">Seleccionar</option>
            <option>Acompañamiento Académico</option>
            <option>Cursos de Fortalecimiento</option>
            <option>Asesoría en Emprendimiento</option>
          </select>
        </div>
        <div className="table-container">
          <table className="activity-table">
            <thead>
              <tr>
                <th>Actividad Formativa</th>
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
                      value={actividad.horasSemanales}
                      onChange={(e) => handleInputChange(e, index, 'horasSemanales')}
                      min="0"
                      max="46"
                      maxLength="2"
                    />
                    {errorMessages[`horasSemanales-${index}`] && (
                      <span className="error-message">{errorMessages[`horasSemanales-${index}`]}</span>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      value={actividad.horasSemestre}
                      onChange={(e) => handleInputChange(e, index, 'horasSemestre')}
                      min="0"
                      max="46"
                      maxLength="2"
                    />
                    {errorMessages[`horasSemestre-${index}`] && (
                      <span className="error-message">{errorMessages[`horasSemestre-${index}`]}</span>
                    )}
                  </td>
                  <td>
                    <textarea
                      value={actividad.descripcion}
                      onChange={(e) => {
                        const updatedActivities = [...selectedActivities];
                        updatedActivities[index].descripcion = e.target.value;
                        setSelectedActivities(updatedActivities);
                      }}
                    />
                  </td>
                  <td>
                      <select
                        onChange={(e) => handleProductSelect(index, e.target.value)}
                        className="input-select"
                      > 
                        <option value="">Seleccionar producto</option>
                        {actividad.producto && actividad.producto.length > 0 ? (
                          actividad.producto.map((producto, productoIndex) => (
                            <option key={productoIndex} value={producto}>
                              {producto}
                            </option>
                          ))
                        ) : (
                          <option disabled>No hay productos disponibles</option>
                        )}
                      </select>
                      {/* Lista de productos seleccionados */}
                      <ul>
                        {actividad.productosSeleccionados.map((producto, productoIndex) => (
                          <li key={productoIndex}>{producto}</li>
                        ))}
                      </ul>
                    </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total horas semanales:</td>
                <td>{totalHorasSemanales}</td>
                <td>Total horas semestre:</td>
                <td>{totalHorasSemestre}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </form>
    </div>
  </div>
  );
};
export default ActividadFormativa;