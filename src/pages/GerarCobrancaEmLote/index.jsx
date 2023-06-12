import React, { useContext, useState } from 'react';
import UserContext from '../../components/Context';



export function GerarCobrancaEmLote() {

    const { user } = useContext(UserContext);


    return (
        <div>           

            <p>Olá {user}</p>

            <p>Gerar Cobrança</p>
        </div>
    );
}