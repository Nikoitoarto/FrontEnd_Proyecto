import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9080/proyectoformulario/api',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;