import { useState } from "react";
import { generos } from "@preguntas";

const GeneroSeleccionado = () => {
  const [selectedGeneros, setSelectedGeneros] = useState<string[]>([]);

  const handleSelect = (event: React.MouseEvent, genero: { nombre: string; img: string }) => {
    event.preventDefault();
    event.stopPropagation();

    if (selectedGeneros.includes(genero.nombre)) {
      setSelectedGeneros(selectedGeneros.filter((nombre) => nombre !== genero.nombre));
    } else {
      setSelectedGeneros([...selectedGeneros, genero.nombre]);
    }
    console.log(`Selected generos: ${selectedGeneros}`);
  };

  return (
    <section className="preguntauno">
      <h2>¿Cuáles son los géneros que te gustan más?</h2>
      <div className="generos">
        {generos.map((genero) => (
          <div
            key={genero.nombre}
            className={`generos__article ${selectedGeneros.includes(genero.nombre) ? "selected" : ""}`}
            onClick={(event) => handleSelect(event, genero)}
          >
            <img src={genero.img} alt={genero.nombre} draggable="false" />
            <span>{genero.nombre}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GeneroSeleccionado;