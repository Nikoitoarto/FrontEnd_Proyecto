import { useEffect } from 'react';
import { getForm } from 'services/gsd/formSvc';

export const useLoadTeacherData = (formId, setValue, setIsNextDisabled) => {
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await getForm(formId);
                if (response.status) { 
                    setValue('tacher_name', response.data.nombreProfesor, {shouldDirty: true});
                    setValue('academic_program', response.data.programa, {shouldDirty: true});
                    setValue('faculty', response.data.facultad, {shouldDirty: true});
                    setValue('academic_period', response.data.periodo, {shouldDirty: true});
                    setValue('custom_date_picker', response.data.fechaFormulario, {shouldDirty: true});
                    setIsNextDisabled(false);
                }
            } catch (error) {
                console.error('Error cargando los datos del formulario: ', error);
            }
        };
        loadData();
    }, [formId, setValue, setIsNextDisabled]);
};