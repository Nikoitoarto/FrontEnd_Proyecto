import { useEffect } from 'react';
import api from 'api/gsdApi/apiConfig';
import { getGsdApiToken } from 'utils/storage';

const useAxiosInterceptors = (setIsLoading) => {

  useEffect(() => {

    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        setIsLoading(true); // Activa el loader al iniciar la solicitud
        const token = getGsdApiToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        setIsLoading(false); // Desactiva el loader si hay un error
        return Promise.reject(error);
      }
    );

    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        setIsLoading(false); // Desactiva el loader si la respuesta es exitosa
        return response; // No olvides retornar la respuesta
      },
      (error) => {
        setIsLoading(false); // Desactiva el loader si hay un error
        return Promise.reject(error);
      }
    );

    // Ejectar los interceptores cuando el componente se desmonte
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [setIsLoading]);
};

export default useAxiosInterceptors;