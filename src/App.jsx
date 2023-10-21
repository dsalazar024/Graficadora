// src/components/App.js
import React, { useState } from "react";
import Graficadora from "./Graficadora";

const App = () => {
  const [m, setM] = useState(""); // Estado para el coeficiente m
  const [b, setB] = useState(""); // Estado para el término constante b

  // Combinamos m y b para formar la función completa
  const funcion = `${m}x${b >= 0 ? "+" : ""}${b}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
      <h1 style={{marginTop: "13rem"}}>Graficadora de Funciones</h1>
      <div>
        <span>X</span>
        <input
          type="text"
          placeholder="Ej: 3"
          value={m}
          onChange={(e) => setM(e.target.value)}
        />
        <span> </span>
        <span> </span>
        <span>Y</span>
        <input
          type="text"
          placeholder="Ej: -2"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <Graficadora funcion={funcion} />
    </div>
  );
};

export default App;
