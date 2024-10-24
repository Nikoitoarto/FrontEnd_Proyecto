export const createFormPayload = (
    userId, 
    academicProgram, 
    faculty, 
    academicPeriod, 
    formDate
) => ({
    "usuarioId": userId,
    "formulario": {
      "fechaFormulario": formDate,
      "facultad": faculty,
      "programa": academicProgram,
      "periodo": academicPeriod,
      "estado": "DILIGENCIADO"
    }
});