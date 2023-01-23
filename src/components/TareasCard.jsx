import { useContext } from "react";
import { TareasContext } from "../context/TareasContext";

export function TareasCard({ tarea }) {
  const { deleteTarea } = useContext(TareasContext);

  return (
    <div key={tarea.id} className="bg-slate-800  text-white p-4 rounded-md ">
      <h1 className=" text-lg font-bold  capitalize">{tarea.title}</h1>
      <p className="text-gray-500 text-sm ">{tarea.descripcion}</p>
      <button
        className="bg-red-500   px-2  py-1   rounded-md  mt-4   hover:bg-red-400"
        onClick={() => deleteTarea(tarea.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}
