import React, { useContext, useState } from 'react';
import UserContext from '../../components/Context';



export function GerarCobranca() {

    const { user } = useContext(UserContext);


    return (
        <div>
           
            <p>Olá {user}</p>

            <p>Home</p>
        </div>
    );
}