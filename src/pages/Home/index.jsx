import { Container } from './styles';

import { Header } from '../../components/Header'

import React, { useContext } from 'react';

import UserContext from '../../components/Context';


export function Home() {
    const { user, route } = useContext(UserContext);

    return (
        <Container>
            <Header />

            <p>Olá {user}</p>
            <p>Você está na página  {route}</p>
        </Container>
    );
}
