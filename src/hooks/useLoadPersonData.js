import { useEffect } from 'react';
import { getPerson } from 'services/gsd/personSvc';

export const useLoadPersonData = (personId, setStateFullName) => {
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await getPerson(personId);
                if (response.status) { 
                    setStateFullName(
                        response.data.nombre + ' ' + response.data.apellido
                    );
                }
            } catch (error) {
                console.error('Error cargando los datos de persona: ', error);
            }
        };
        loadData();
    }, [personId, setStateFullName]);
};