// src/components/App.js
import React, { useState } from 'react';
import Graficadora from './Graficadora';

const App = () => {
  const [funcion, setFuncion] = useState(''); // Estado para almacenar la función ingresada por el usuario

  return (
    <div>
      <h1>Graficadora de Funciones</h1>
      <input 
        type="text" 
        placeholder="Ej: 3x-2" 
        value={funcion}
        onChange={e => setFuncion(e.target.value)}
      />
      <Graficadora funcion={funcion} />
    </div>
  );
};

export default App;
