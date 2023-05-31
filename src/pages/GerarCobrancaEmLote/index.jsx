import React, { useContext, useState } from 'react';
import UserContext from '../../components/Context';
import { Header } from '../../components/Header'


export function GerarCobrancaEmLote() {

    const { user, route} = useContext(UserContext);


    return (
        <div>
            <Header />

            <p>Olá {user}</p>

            <p>Você está na página: {route}</p>
        </div>
    );
}