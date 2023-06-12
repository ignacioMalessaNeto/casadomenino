import { Container } from './styles';

import React, { useContext } from 'react';

import UserContext from '../../components/Context';


export function Home() {
    const { user } = useContext(UserContext);

    return (
        <>           

            <p>Olá {user}</p>
            <p>Home</p>
        </>
    );
}
