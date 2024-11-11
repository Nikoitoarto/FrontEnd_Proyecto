import React, { useState } from 'react';
import './welcome.css';
import { getGsdPersonId } from 'utils/storage';
import { useLoadPersonData } from 'hooks/useLoadPersonData'
import { setGsdPersonFullName } from 'utils/storage';

const Welcome = ({}) => {
    const [fullName, setFullName] = useState('');

    setGsdPersonFullName(fullName);
    useLoadPersonData(getGsdPersonId(), setFullName)

    return (
        <div className="welcome-page">
            <h1>Bienvenido al sistema de Gestión Semestral</h1>
            <h2>{fullName}</h2>
        </div>
    );
};

export default Welcome;