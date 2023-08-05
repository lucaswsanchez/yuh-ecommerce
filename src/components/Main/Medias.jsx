import React, { useEffect, useState } from "react";
import database from "../../firebaseConfig";
import "./Medias.css";

const Medias = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [marcaFiltrada, setMarcaFiltrada] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [elementosPorPagina] = useState(4);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = database.ref("productos");
        const snapshot = await productosRef.once("value");
        const data = snapshot.val();

        if (data) {
          setProductos(data.medias);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error al obtener los productos:", error);
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  useEffect(() => {
    const filtrarPorMarca = () => {
      if (marcaFiltrada === "") {
        setProductosFiltrados(productos);
      } else {
        const productosFiltrados = productos.filter(
          (producto) => producto.marca === marcaFiltrada
        );
        setProductosFiltrados(productosFiltrados);
      }
    };

    filtrarPorMarca();
  }, [productos, marcaFiltrada]);

  const cambiarMarcaFiltrada = (marca) => {
    setMarcaFiltrada(marca);
    setPaginaActual(1);
  };

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const indiceUltimoElemento = paginaActual * elementosPorPagina;
  const indicePrimerElemento = indiceUltimoElemento - elementosPorPagina;
  const elementosAMostrar = productosFiltrados.slice(
    indicePrimerElemento,
    indiceUltimoElemento
  );

  const totalPaginas = Math.ceil(
    productosFiltrados.length / elementosPorPagina
  );

  const esPaginaActual = (numeroPagina) => {
    return numeroPagina === paginaActual;
  };

  const numerosPagina = [];
  for (let i = 1; i <= totalPaginas; i++) {
    numerosPagina.push(
      <button
        key={i}
        className={esPaginaActual(i) ? "active" : ""}
        onClick={() => cambiarPagina(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="medias-container">
      <div className="medias-header">
        <h2>MEDIAS</h2>
      </div>
      <div className="filtro">
        <select
          value={marcaFiltrada}
          onChange={(e) => cambiarMarcaFiltrada(e.target.value)}
        >
          <option value="">Todas las marcas</option>
          <option value="Adidas">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="Otras">Otras</option>
        </select>
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="productos">
            {elementosAMostrar.map((producto) => (
              <figure className="product" key={producto.nombre}>
                <img src={producto.imagen} alt={producto.nombre} />
                <figcaption>{producto.nombre}</figcaption>
              </figure>
            ))}
          </div>
          <div className="pagination">
            {numerosPagina.map((numero) => numero)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Medias;
