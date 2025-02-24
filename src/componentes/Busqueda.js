import React, { useEffect, useState } from "react";

const ComponenteBusqueda = ({ usuarios, setUsuarios }) => {
  const [busqueda, setBusqueda] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/users";

  // Función: Si no hay usuarios, hacer una llamada al API y almacenarlos en el estado
  const mostrarDatos = async () => {
    if (usuarios.length === 0) {
      const response = await fetch(URL);
      const data = await response.json();
      setUsuarios(data);
    }
  };

  // Filtrar los usuarios según el texto ingresado en el buscador (por nombre, email o ciudad)
  const buscador = (e) => {
    setBusqueda(e.target.value);
  };

  const resultados = usuarios.filter(
    (dato) =>
      dato.name.toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.email.toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.address.city.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    mostrarDatos();
  }, []);

  // Vista de la lista
  return (
    <div className="container mt-4">
      <input
        value={busqueda}
        onChange={buscador}
        type="text"
        placeholder="Buscar por nombre, email o ciudad..."
        className="form-control"
      />
      <br />
      <div className="row">
        {resultados.map((user) => (
          <div key={user.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card p-3 shadow-sm rounded-4">
              <div>
                <h5>
                  {user.name} (@{user.username})
                </h5>
                <p className="mb-1">✉️ {user.email}</p>
                <p className="mb-1">🏙️ {user.address.city}</p>
                <p className="mb-1">📞 {user.phone}</p>
                <p className="mb-0">🏢 {user.company.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponenteBusqueda;
