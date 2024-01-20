import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Formulario from "./components/Formulario";
import ListaEstudiantes from "./components/ListaEstudiantes";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [estudiante, setEstudiante]=useState({})
  const [estudiantes, setEstudiantes]=useState(JSON.parse(localStorage.getItem('estudiantes')) ?? [])

  useEffect(()=>{
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
  },[estudiantes])
  
  const borrar= (id)=>{
    if(confirm('¿Desea eliminarlo?')){
      const nuevo= estudiantes.filter(est => est.id !== id)
      setEstudiantes(nuevo)
    }
  }
  return (
    <>
          <NavBar/>
      <div className="container text-center mt-4">
        <div className="row mt-3">
        <Formulario setEstudiante={setEstudiante} estudiante={estudiante} estudiantes={estudiantes} setEstudiantes={setEstudiantes}/>
        <ListaEstudiantes setEstudiante={setEstudiante} borrar={borrar} estudiantes={estudiantes} estudiante={estudiante}/>
      
        </div>
      </div>
    </>
  );
}

export default App;
