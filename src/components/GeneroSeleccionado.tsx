import { useState } from "react";
import { generos } from "@preguntas";

const GeneroSeleccionado = () => {
  const [selectedGenero, setSelectedGenero] = useState("");

  const handleSelect = (genero: { nombre: string; img: string }) => {
    console.log(`Selected genero: ${genero.nombre}`);
    setSelectedGenero(genero.nombre);
  };

  return (
    <section className="preguntauno">
      <h2>¿Cuál es el género que te gusta más?</h2>
      <div className="generos">
        {generos.map((genero) => (
          <div
            key={genero.nombre}
            className={`generos__article ${selectedGenero === genero.nombre ? "selected" : ""}`}
            onClick={() => handleSelect(genero)}
          >
            <img src={genero.img} alt={genero.nombre} />
            <span>{genero.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GeneroSeleccionado;