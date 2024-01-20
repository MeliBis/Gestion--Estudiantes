import Estudiante from "./Estudiante";
import Estudiantes from "./Estudiante";

const ListaEstudiantes = ({estudiante,estudiantes, borrar, setEstudiante}) => {
  return (
    <div className="col-md-7 mt-2">
      <div className="card">
        <div className="card-header">Lista de estudiantes</div>
        <div className="card-body">
          <table className="table">
            <thead>
                <tr>
                  <th scope="row">Documentio</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                
                </tr>
            </thead>
            <tbody>
              {estudiantes && estudiantes.length?
              (
                estudiantes.map((est) => (
                  <Estudiante setEstudiante={setEstudiante} borrar={borrar} estudiante={est} key={est.id}/>
                ))
              ):
              (<tr>
                <th colSpan={5} scope="row">No hay estudiantes</th>
              </tr>)
            }
               {/* <Estudiante estudiante={estudiante}/> */}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaEstudiantes;
