export const setGsdApiToken = (value) => {
    try {
        localStorage.setItem('gsd_api_token', value);
    } catch (error) {
        console.error('Error guardando token en app storage', error);
    }
};

export const getGsdApiToken = () => {
    let value = null;
    try {
        value = localStorage.getItem('gsd_api_token') ?? null;
    } catch (error) {
        console.error('Error obteniendo token en app storage', error);
    }
    return value;
};

export const gsdApiTokenClear = () => {
    try {
        localStorage.removeItem('gsd_api_token');
    } catch (error) {
        console.error('Error al borrar token en app storage', error);
    }
};

export const getGsdUserId = () => {
    let value = null;
    try {
        value = localStorage.getItem('gsd_api_user_id') ?? null;
    } catch (error) {
        console.error('Error obteniendo id de usuario en app storage', error);
    }
    return value;
};