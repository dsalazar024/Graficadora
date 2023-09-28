// src/components/Graficadora.js
import React from 'react';
import Plot from 'react-plotly.js';

const Graficadora = ({ funcion }) => {
  const xValues = Array.from({ length: 1000 }, (_, i) => i / 100 - 5); // de -5 a 5

  function parseFuncion(funcion) {
    // La expresión regular ahora maneja coeficientes negativos
    const match = funcion.match(/^([+-]?\d+)x([+-]\d+)?$/);
    if (match) {
      return {
        m: parseFloat(match[1]),
        b: match[2] ? parseFloat(match[2]) : 0, // Si no hay término constante, se asume 0
      };
    }
    return null;
  }
  
  
  const parsedFuncion = parseFuncion(funcion);
  if (!parsedFuncion) {
    return <p>Ingrese una función lineal válida de la forma mx+b.</p>;
  }

  const yValues = xValues.map(x => parsedFuncion.m * x + parsedFuncion.b);

  const yInterseccion = parsedFuncion.b;
  const xInterseccion = parsedFuncion.m !== 0 ? -parsedFuncion.b / parsedFuncion.m : null;

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines',
          name: "Trazo",
          marker: { color: 'blue' },
        },
        {
          x: [0, xInterseccion],
          y: [yInterseccion, 0],
          type: 'scatter',
          mode: 'markers',
          marker: { color: 'red', size: 10 },
          name: 'Intersecciones'
        }
      ]}
      layout={{ title: 'Graficadora de Funciones Lineales' }}
    />
  );
};

export default Graficadora;
