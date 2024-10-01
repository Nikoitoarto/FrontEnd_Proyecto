import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
function Login() {
    const navigate = useNavigate(); // Hook para la navegación
    const handleLogin = (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario
        // Aquí puedes validar las credenciales si es necesario
        navigate('/menu'); // Redirige a la página del menú
    };
    return (
        <div className='login-container'>
            <img 
                src="https://corhuila.edu.co/wp-content/uploads/2021/03/logo-cuadrado-blanco.png" 
                alt="Logo" 
                className="logo" 
            />
            <div className='login-box'>
                <form onSubmit={handleLogin}>
                    <div className='mb-3 text-center'>
                        <i className="fas fa-user fa-3x mb-2"></i>
                        <h6 className="mb-3">Autenticación</h6>
                    </div>
                    <div className='input-container'>
                        <div className='mb-3 input-group'>
                            <label htmlFor="email">Correo Electrónico</label>
                            <input type="email" placeholder='Ingrese el correo electrónico' className='form-control'/>
                        </div>
                        <div className='mb-3 input-group'>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" placeholder='Introduzca la contraseña' className='form-control'/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className='btn btn-success'>Ingresar</button>  
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
