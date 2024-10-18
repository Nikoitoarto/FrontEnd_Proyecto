import api from 'api/gsdApi/apiConfig';
import { CREATE_FORM_API } from 'api/gsdApi/endpoints';

export const createForm = async (payload) => {
    try {
        const response = await api.post(
            CREATE_FORM_API, 
            payload
        );
        return response.data;
    } catch (error) {
        console.error('Error gsd form create: ', error);
        throw error; 
    }
};