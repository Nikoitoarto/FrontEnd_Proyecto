import "react-datepicker/dist/react-datepicker.css";
import './teacher-data.css'
import React, { useState } from 'react';
import {Controller, useForm } from 'react-hook-form';
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import { createForm } from 'services/gsd/formSvc';
import { createFormPayload } from 'api/gsdApi/payloads/createForm'
import { useLoadTeacherData } from 'hooks/useLoadTeacherData'
import { es } from 'date-fns/locale/es';
import { 
    getGsdPersonFullName, 
    getGsdFormId,
    setGsdFormId 
} from 'utils/storage';

const TeacherData = () => {
    registerLocale('es', es)
    const fieldRequiredMsg = 'Este campo es requerido';
    const {control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const tacherNameValue = getGsdPersonFullName();
    const formId = getGsdFormId();
    
    useLoadTeacherData(formId, setValue);

    const onSubmit = async (data) => {
        const formattedData = {
            ...data,
            custom_date_picker: data.custom_date_picker.toISOString(), // O utiliza el formato que prefieras
        };
        let response = await createForm(
            createFormPayload(
                formattedData.academic_program,
                formattedData.faculty,
                formattedData.academic_period,
                formattedData.custom_date_picker
            )
        );
        if (response.status) {
            setGsdFormId(response.data.id);
            setSuccessMessage(response.message)
        }
    };
    return (
        <div>
            <div className='success-message-container'>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-flex">
                <div className="teacher-name-container">
                    <label htmlFor="tacher_name" className='teacher-name-label form-label'>
                        Nombre del docente:
                    </label>
                    <input 
                        id="tacher_name" 
                        className='teacher-name-readonly-input' 
                        defaultValue={tacherNameValue}
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="academic_program" className='form-label'>
                        Programa Academico:
                    </label>
                    <select 
                        id="academic_program"
                        className='form-select form-input-w-100'
                        {...register(
                            'academic_program', 
                            { required: fieldRequiredMsg }
                        )}
                    >
                        <option value="">Selecciona un programa</option>
                        <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                        <option value="Ingeniería Ambiental">Ingeniería Ambiental</option>
                        <option value="Ingeniería Industrial">Ingeniería Industrial</option>
                        <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                        <option value="Ingeniería Energía Renovables">Ingeniería Energía Renovables</option>
                    </select>
                    {errors.academic_program && <span className='form-error-msg'>{errors.academic_program.message}</span>}
                </div>
                <div>
                    <label htmlFor="faculty" className='form-label'>
                        Facultad:
                    </label>
                    <select 
                        id="faculty"
                        className='form-select form-input-w-100'
                        {...register(
                            'faculty', 
                            { required: fieldRequiredMsg }
                        )}
                    >
                        <option value="">Selecciona una facultad</option>
                        <option value="Ingeniería">Facultad de Ingeniería</option>
                    </select>
                    {errors.faculty && <span className='form-error-msg'>{errors.faculty.message}</span>}
                </div>
                <div>
                    <label htmlFor="academic_period" className='form-label'>
                        Periodo Academico:
                    </label>
                    <input 
                        id="academic_period" 
                        className='form-input'
                        {...register(
                            'academic_period', 
                            { required: fieldRequiredMsg }
                        )}
                    />
                    {errors.academic_period && <span className='form-error-msg'>{errors.academic_period.message}</span>}
                </div>
                <div>
                    <label htmlFor="custom_date_picker" className='form-label'>
                        Selecciona una fecha:
                    </label>   
                    <Controller
                        control={control}
                        name="custom_date_picker"
                        defaultValue={null}
                        rules={{
                            required: true,
                        }}
                        render={({ field }) => (
                            <DatePicker
                                placeholderText="clic aqui"
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                dateFormat="dd/MM/yyyy"
                                locale="es"
                                className='form-input'
                            />
                        )}
                    />
                    {
                        errors.custom_date_picker && 
                        <span className='form-error-msg'>{fieldRequiredMsg}</span>
                    }
                </div>
                <div className="form-button-container">
                    <button type="submit" className='form-button'>Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default TeacherData;