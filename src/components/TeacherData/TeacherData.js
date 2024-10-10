import "react-datepicker/dist/react-datepicker.css";
import './teacher-data.css'
import React from 'react';
import {Controller, useForm } from 'react-hook-form';
import { registerLocale } from  "react-datepicker";
import DatePicker from "react-datepicker";
import { es } from 'date-fns/locale/es';

const TeacherData = () => {
    registerLocale('es', es)
    const fieldRequiredMsg = 'Este campo es requerido';
    const {control, register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-flex">
           <div>
                <label htmlFor="tacher_name" className='form-label'>
                    Nombre del docente:
                </label>
                <input 
                    id="tacher_name" 
                    className='form-input'
                    {...register(
                        'tacher_name', 
                        { required: fieldRequiredMsg }
                    )}
                />
                {errors.tacher_name && <span className='form-error-msg'>{errors.tacher_name.message}</span>}
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
                    <option value="system_engineering">Ingeniería Sistemas</option>
                    <option value="environmental_engineering">Ingeniería Ambiental</option>
                    <option value="industrial_engineering">Ingeniería Industrial</option>
                    <option value="mechatronic_engineering">Ingeniería Mecatrónica</option>
                    <option value="renewable_energy_engineering">Ingeniería Energía Renovables</option>
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
                    <option value="faculty_engineering">Facultad de Ingeniería</option>
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
    );
};

export default TeacherData;