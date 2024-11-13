import React,  { useState }  from 'react';
import './login.css'; 
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Logo from 'components/Logo';
import { createSession } from 'services/gsd/loginSvc';
import { loginPayload } from 'api/gsdApi/payloads/login'
import { 
    setGsdApiToken, 
    setGsdUsername, 
    setGsdPersonId,
    setGsdUserId,
    setGsdFormId,
    setGsdRolId
} from 'utils/storage';

const Login = ({setIsLoggedIn}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        let response = await createSession(
            loginPayload(data.usuario, data.contrasena)
        );
        if (response.status) {
            setErrorMessage("");
            setGsdApiToken(response.data.token);
            setGsdUsername(response.data.usuarioNombre);
            setGsdPersonId(response.data.personaId);
            setGsdUserId(response.data.usuarioId);
            setGsdRolId(response.data.rolId);
            setIsLoggedIn(true);
            
            if (response.data.formularioId.length) {
                setGsdFormId(response.data.formularioId[0]);
            }
            navigate("/main")
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