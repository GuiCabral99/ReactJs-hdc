import React from 'react'

import './App.css'

import Index from './components/Index'
import Evento from './components/Eventos'
import Formulario from './components/Formulario'



function App() {

  return (
    <div className="App">
      <h1>Criando Eventos</h1>
      <Index />

      <Formulario />

      <Evento />
    </div>
  );
}

export default App
