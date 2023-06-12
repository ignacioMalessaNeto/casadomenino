import React, { useContext, useState } from 'react';
import UserContext from '../../components/Context';



export function GerenciarCobranca() {

    const { user } = useContext(UserContext);

    return (
        <div>
           

            <p>Olá {user}</p>

            <p>Gerenciar Cobrança</p>
        </div>
    );
}