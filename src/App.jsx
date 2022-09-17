import React from 'react'

import './App.css'

import HelloWorld from './components/HelloWorld'
import Evento from './components/Eventos'
import Formulario from './components/Formulario'



function App() {

  return (
    <div className="App">
      <h1>Criando Eventos</h1>
      <HelloWorld />

      <Evento />
      
      <Formulario />
    </div>
  );
}

export default App
