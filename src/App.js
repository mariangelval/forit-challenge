import { useState } from "react";
// Importar componentes de la aplicación
import ComponenteBusqueda from "./componentes/Busqueda";
import AgregarUsuario from "./componentes/AgregarUsuario";

// Inicializar usuarios y modal (formulario pop-up para agregar usuarios)
const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Vista principal
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Usuarios</h1>
        <button
          className="btn btn-primary"
          onClick={() => setModalVisible(true)}
        >
          <i class="bi bi-plus"></i> Agregar Usuario
        </button>
      </div>

      {/* Recibir props de usuarios y actualizar */}
      <ComponenteBusqueda usuarios={usuarios} setUsuarios={setUsuarios} />

      {/* Mostrar el componenente AgregarUsuario solo si modalVisible es verdadero, es decir, si el formulario fue solicitado mediante el botón de 'Agregar Usuario' */}
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
