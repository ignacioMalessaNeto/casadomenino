import React, { useContext } from 'react';
import UserContext from '../../components/Context';



export function GerarCobranca() {

    const { user } = useContext(UserContext);


    return (
        <div>
           
            <p>Olá {user}</p>

            <p>Gerar Cobrança</p>
        </div>
    );
}