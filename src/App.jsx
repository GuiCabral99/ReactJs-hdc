import React from 'react'

import './App.css'

import Index from './components/Lists/Index'
import Evento from './components/EventsReact/Eventos'
import Formulario from './components/Formulario'
import Condicional from './components/Condicional'



function App() {

  return (
    <div className="App">
      <h1>Criando Eventos</h1>
      <Index />

      <Formulario />

      <Evento />

      <Condicional />
    </div>
  );
}

export default App
