import api from 'api/gsdApi/apiConfig';
import { LOGIN_POINT_API } from 'api/gsdApi/endpoints';

export const createSession = async (payload) => {
    let data = {};
    try {
        const response = await api.post(
            LOGIN_POINT_API, 
            payload
        );
        data = response.data;
    } catch (error) {
        console.error('Error gsd create session: ', error);
        data = error.response.data
    }
    return data;
};