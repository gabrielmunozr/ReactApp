import React from 'react'
import './App.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import FormularioRegistro from './components/registro1.js'
import MenuBar from './components/menubar.js';

function App() {
  return (
    <>
      <MenuBar />
      <FormularioRegistro />
    </>
    );
}

export default App;
