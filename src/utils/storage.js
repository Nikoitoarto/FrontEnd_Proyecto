export const localStorageClear = () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error('Error al limpiar el storage en app', error);
    }
};

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

export const setGsdUserId = (value) => {
    try {
        localStorage.setItem('gsd_api_user_id', value);
    } catch (error) {
        console.error('Error guardando el id usuario en app storage', error);
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

export const setGsdUsername = (value) => {
    try {
        localStorage.setItem('gsd_user_name', value);
    } catch (error) {
        console.error('Error guardando el usuario en app storage', error);
    }
};

export const getGsdUsername = () => {
    let value = null;
    try {
        value = localStorage.getItem('gsd_user_name') ?? null;
    } catch (error) {
        console.error('Error obteniendo el usuario en app storage', error);
    }
    return value;
};

export const setGsdPersonId = (value) => {
    try {
        localStorage.setItem('gsd_person_id', value);
    } catch (error) {
        console.error('Error guardando el id de persona en app storage', error);
    }
};

export const getGsdPersonId = () => {
    let value = null;
    try {
        value = localStorage.getItem('gsd_person_id') ?? null;
    } catch (error) {
        console.error('Error obteniendo el id de persona en app storage', error);
    }
    return value;
};

export const setGsdPersonFullName = (value) => {
    try {
        localStorage.setItem('gsd_person_full_name', value);
    } catch (error) {
        console.error('Error guardando el nombre completo en app storage', error);
    }
};

export const getGsdPersonFullName = () => {
    let value = null;
    try {
        value = localStorage.getItem('gsd_person_full_name') ?? null;
    } catch (error) {
        console.error('Error obteniendo el nombre completo en app storage', error);
    }
    return value;
};

export const setGsdFormId = (value) => {
    try {
        localStorage.setItem('gsd_api_form_id', value);
    } catch (error) {
        console.error('Error guardando el id form en app storage', error);
    }
};

export const getGsdFormId = () => {
    let value = null;
    try {
        value = localStorage.getItem('gsd_api_form_id') ?? null;
    } catch (error) {
        console.error('Error obteniendo el id form en app storage', error);
    }
    return value;
};

export const setGsdRolId = (value) => {
    try {
        localStorage.setItem('gsd_api_rol_id', value);
    } catch (error) {
        console.error('Error guardando el id rol en app storage', error);
    }
};

export const getGsdRolId = () => {
    let value = null;
    try {
        value = localStorage.getItem('gsd_api_rol_id') ?? null;
    } catch (error) {
        console.error('Error obteniendo el id rol en app storage', error);
    }
    return value;
};