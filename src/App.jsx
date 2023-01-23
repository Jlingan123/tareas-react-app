import { TareaForm } from "./components/TareaForm";
import { ListaTarea } from "./components/ListaTarea";

function App() {
  return (
    <main className="bg-slate-900  h-screen">
      <div className="container  mx-auto  p-10" >
        <TareaForm />
        <ListaTarea />
      </div>
    </main>
  );
}

export default App;
