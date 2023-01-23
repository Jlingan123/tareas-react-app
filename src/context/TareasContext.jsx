import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tareas";

export const TareasContext = createContext();

export function TareasContextProvider(props) {
  const [tareas, setTareas] = useState([]);
  useEffect(() => setTareas(data), []);

  function createTarea(tarea) {
    setTareas([
      ...tareas,
      {
        id: tareas.length,
        title: tarea.title,
        descripcion: tarea.descripcion,
      },
    ]);
  }

  function deleteTarea(tareaId) {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  }

  return (
    <TareasContext.Provider value={{ tareas, createTarea, deleteTarea }}>
      {props.children}
    </TareasContext.Provider>
  );
}
