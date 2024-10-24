import api from 'api/gsdApi/apiConfig';
import { CREATE_FORM_POINT_API, getFormPointApi } from 'api/gsdApi/endpoints';

export const createForm = async (payload) => {
    try {
        const response = await api.post(
            CREATE_FORM_POINT_API, 
            payload
        );
        return response.data;
    } catch (error) {
        console.error('Error gsd form create: ', error);
        throw error; 
    }
};

export const getForm = async (id) => {
    try {
        const response = await api.get(
            getFormPointApi(id)
        );
        return response.data;
    } catch (error) {
        console.error('Error gsd get form: ', error);
        throw error; 
    }
};