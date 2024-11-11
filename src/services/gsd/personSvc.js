import api from 'api/gsdApi/apiConfig';
import { getPersonPointApi } from 'api/gsdApi/endpoints';

export const getPerson = async (id) => {
    let data = {};
    try {
        const response = await api.get(
            getPersonPointApi(id)
        );
        data = response.data;
    } catch (error) {
        console.error('Error gsd get person: ', error);
        data = error.response.data;
    }
    return data;
};