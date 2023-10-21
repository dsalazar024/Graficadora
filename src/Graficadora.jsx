import React from "react";
import Plot from "react-plotly.js";

const Graficadora = ({ funcion }) => {
  const xValues = Array.from({ length: 1000 }, (_, i) => i / 100 - 5); // de -5 a 5

  function parseFuncion(funcion) {
    const match = funcion.match(/^([+-]?\d+)x([+-]\d+)?$/);
    if (match) {
      return {
        m: parseFloat(match[1]),
        b: match[2] ? parseFloat(match[2]) : 0,
      };
    }
    return null;
  }

  const parsedFuncion = parseFuncion(funcion);
  let yValues = [];
  let intersecciones = [];

  if (parsedFuncion) {
    yValues = xValues.map((x) => parsedFuncion.m * x + parsedFuncion.b);
    const yInterseccion = parsedFuncion.b;
    const xInterseccion =
      parsedFuncion.m !== 0 ? -parsedFuncion.b / parsedFuncion.m : null;
    intersecciones = [
      {
        x: [0, xInterseccion],
        y: [yInterseccion, 0],
        type: "scatter",
        mode: "markers",
        marker: { color: "red", size: 10 },
        name: "Intersecciones",
      },
    ];
  }

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          name: "Trazo",
          marker: { color: "blue" },
        },
        ...intersecciones,
      ]}
      layout={{
        xaxis: { zeroline: true },
        yaxis: { zeroline: true },
      }}
    />
  );
};

export default Graficadora;
