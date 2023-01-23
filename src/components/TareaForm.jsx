import { useContext, useState, useEffect } from "react";
import { TareasContext } from "../context/TareasContext";

export function TareaForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { createTarea } = useContext(TareasContext);

  const submitForms = (e) => {
    e.preventDefault();

    const newTarea = {
      title,
      descripcion,
    };

    createTarea(newTarea);
  };

  return (
    <div className="max-w-md  mx-auto ">
      <form onSubmit={submitForms} className="bg-slate-800 p-10  mb-4">
        <h1 className="text-2xl  font-bold   text-white mb-3  ">
          Crea tu tarea
        </h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2  "
          placeholder="Ingrese nueva tarea"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2  "
          placeholder="Ingresar descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 px-3  py-1  rounded-md text-white">Save</button>
      </form>
    </div>
  );
}
