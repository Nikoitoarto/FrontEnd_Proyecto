export const createFormPayload = (
    userId, 
    teacherName, 
    academicProgram, 
    faculty, 
    academicPeriod, 
    formDate
) => ({
    "usuarioId": userId,
    "formulario": {
      "state": true,
      "fechaFormulario": formDate,
      "nombreProfesor": teacherName,
      "facultad": faculty,
      "programa": academicProgram,
      "periodo": academicPeriod,
      "estado": "ENVIADO"
    }
});