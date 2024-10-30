import React,  { useState }  from 'react';
import './login.css'; 
import { Controller, useForm } from 'react-hook-form';
import Logo from 'components/Logo';
import { createSession } from 'services/gsd/loginSvc';
import { loginPayload } from 'api/gsdApi/payloads/login'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data) => {
        console.log('Datos del formulario:', data);
        let response = await createSession(
            loginPayload(data.usuario, data.contrasena)
        );
        if (response.status) {
            setErrorMessage("");
           console.log(response.data)
        } else {
            setErrorMessage(response.message);
        }
    }

    return (
        <div className="login-page">
            <div className="logo">
                <Logo/>
            </div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        {...register('usuario', { required: 'El usuario es obligatorio' })}
                        className="input-field"
                    />
                    {errors.usuario && <p className="error-message">{errors.usuario.message}</p>}

                    <input
                        type="password"
                        placeholder="Contraseña"
                        {...register('contrasena', { required: 'La contraseña es obligatoria' })}
                        className="input-field"
                    />
                    {errors.contrasena && <p className="error-message">{errors.contrasena.message}</p>}

                    <div className='error-message-container'>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                    <button type="submit" className="submit-button">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
}

export default Login;