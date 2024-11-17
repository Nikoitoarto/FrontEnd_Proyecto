import axios from 'axios';
import { getGsdApiToken } from 'utils/storage';

// Configurar la instancia de Axios
const api = axios.create({
  baseURL: 'http://localhost:9080/proyectoformulario/api',
  timeout: 10000,
});

// Añadir un interceptor para incluir el token dinámicamente
api.interceptors.request.use(
  (config) => {
    const token = getGsdApiToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Manejar errores en la configuración de la solicitud
    return Promise.reject(error);
  }
);

export default api;
