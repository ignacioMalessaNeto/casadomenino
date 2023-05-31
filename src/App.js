import React, { useContext, useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import UserContext from './components/Context';

import  { GerarCobranca }  from './pages/GerarCobranca';

import { GerarCobrancaEmLote } from './pages/GerarCobrancaEmLote';

import { GerenciarCobranca } from './pages/GerenciarCobranca';


const App = () => {

  const [route, setRoute ] = useState('Home');

  return (
    <UserContext.Provider value={{ user: "Ignacio", route, setRoute}}>
      <div>
        <h1>Olá, bem vindo ao projeto da Casa do Menino Jesus de Praga</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gerar-cobranca" element={<GerarCobranca />} />
            <Route path="/gerar-cobranca-em-lote" element={<GerarCobrancaEmLote />} />
            <Route GerenciarCobranca path="/gerenciar-cobranca" element={<GerenciarCobranca />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
