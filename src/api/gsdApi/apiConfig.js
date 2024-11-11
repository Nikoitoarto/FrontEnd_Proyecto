import axios from 'axios';
import { getGsdApiToken } from 'utils/storage';

const getHeaders = () => ({
  'Content-Type': 'application/json',
  ...(getGsdApiToken() && { 'Authorization': `Bearer ${getGsdApiToken()}` })
});

const api = axios.create({
  baseURL: 'http://localhost:9080/proyectoformulario/api',
  timeout: 10000, 
  headers: getHeaders(),
});

export default api;