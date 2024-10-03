import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/login';
import './pages/Login/login.css'
import './pages/Pacientes/pacientes.css'
import './pages/RegisterPatient/registerPatient.css'
import './components/navbar/navbar.css'
import RegisterPatient from './pages/RegisterPatient/registerPatient';
import Pacientes from './pages/Pacientes/pacientes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element=
        {<Login
        />
        } />
      <Route path="/register" element=
        {<RegisterPatient
        />
        } />
      <Route path="/pacientes" element=
        {<Pacientes
        />
        } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
