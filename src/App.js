import React, { useContext, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import UserContext from './components/Context';

import  { GerarCobranca }  from './pages/GerarCobranca';

import { GerarCobrancaEmLote } from './pages/GerarCobrancaEmLote';

import { GerenciarCobranca } from './pages/GerenciarCobranca';

import Header from './components/Header';
import { Container } from '@mui/material';


const App = () => {

  const [route, setRoute ] = useState('Home');

  return (
    <UserContext.Provider value={{ user: "Ignacio", route, setRoute}}>
      <Header />
      <Container sx={{marginTop: "50px"}}>
        
        <h1>Olá, bem vindo ao projeto da Casa do Menino Jesus de Praga</h1>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gerar-cobranca" element={<GerarCobranca />} />
            <Route path="/gerar-cobranca-em-lote" element={<GerarCobrancaEmLote />} />
            <Route GerenciarCobranca path="/gerenciar-cobranca" element={<GerenciarCobranca />} />
          </Routes>
        
      </Container>
    </UserContext.Provider>
  );
}

export default App;
