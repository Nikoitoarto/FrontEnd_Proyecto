export const createFormPayload = (
    academicProgram, 
    faculty, 
    academicPeriod, 
    formDate
) => ({
    "formulario": {
      "fechaFormulario": formDate,
      "facultad": faculty,
      "programa": academicProgram,
      "periodo": academicPeriod,
      "estado": "PENDIENTE"
    }
});