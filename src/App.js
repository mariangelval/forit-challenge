import { useState } from "react";
import ComponenteBusqueda from "./componentes/Busqueda";
import AgregarUsuario from "./componentes/AgregarUsuario";

const App = () => {
  const [usuarios, setUsuarios] = useState([]); // Estado de los usuarios
  const [modalVisible, setModalVisible] = useState(false); // Estado del modal

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Usuarios</h1>
        <button
          className="btn btn-primary"
          onClick={() => setModalVisible(true)}
        >
          Agregar Usuario
        </button>
      </div>

      <ComponenteBusqueda usuarios={usuarios} setUsuarios={setUsuarios} />

      {modalVisible && (
        <AgregarUsuario
          setUsuarios={setUsuarios}
          cerrarModal={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default App;
