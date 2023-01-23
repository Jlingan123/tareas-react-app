import { useContext, useState, useEffect } from "react";
import { TareasCard } from "../components/TareasCard";
import { TareasContext } from "../context/TareasContext";

export function ListaTarea() {
  const { tareas } = useContext(TareasContext);

  if (tareas.length === 0) {
    return (
      <h1 className="text-white   text-4xl   text-center">
        No hay tareas disponibles
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <TareasCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}
