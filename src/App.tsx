import React from 'react';
import { Home } from './components/Home';
import { Header } from './global';
import './global.ts';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Repositorio } from './components/Repositorio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Repositorio/:id' element={<Repositorio/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
