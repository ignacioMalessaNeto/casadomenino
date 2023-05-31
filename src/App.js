import React, { useContext } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import UserContext from './components/StateContext';

const App = () => {


  return (
    <UserContext.Provider value={{user: "ignacio", route: "Home"}}>
      <div>
        <h1>Olá, bem vindo ao projeto da Casa do Menino Jesus de Praga</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
