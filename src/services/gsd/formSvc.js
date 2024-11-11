import api from 'api/gsdApi/apiConfig';
import { CREATE_FORM_POINT_API, getFormByIdPointApi } from 'api/gsdApi/endpoints';

export const createForm = async (payload) => {
    let data = {};
    try {
        const response = await api.post(
            CREATE_FORM_POINT_API, 
            payload
        );
        data = response.data;
    } catch (error) {
        console.error('Error gsd form create: ', error);
        data = error.response.data;
    }
    return data;
};

export const getForm = async (id) => {
    let data = {};
    try {
        const response = await api.get(
            getFormByIdPointApi(id)
        );
        data = response.data;
    } catch (error) {
        console.error('Error gsd get form: ', error);
        data = error.response.data;
    }
    return data;
};