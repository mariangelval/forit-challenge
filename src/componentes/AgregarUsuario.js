import React, { useState } from "react";
import "./AgregarUsuario.css";

// Inicialización de los valores del formulario y manejo de cambios en los campos
const AgregarUsuario = ({ setUsuarios, cerrarModal }) => {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo objeto usuario con la información del formulario y un ID único
    const nuevoUsuario = {
      id: Date.now(),
      name: nombre,
      username: usuario,
      email: email,
      address: { city: ciudad },
      phone: telefono,
      company: { name: empresa },
    };

    // Agregarlo a la lista de usuarios
    setUsuarios((prevUsuarios) => [...prevUsuarios, nuevoUsuario]);

    // Limpiar los campos del formulario y cerrar el modal después de agregar el usuario
    setNombre("");
    setUsuario("");
    setEmail("");
    setCiudad("");
    setTelefono("");
    setEmpresa("");

    cerrarModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>Agregar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="form-control mb-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            placeholder="Ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-success w-100">
            Guardar
          </button>
          <button
            type="button"
            className="btn btn-danger w-100 mt-2"
            onClick={cerrarModal}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarUsuario;
