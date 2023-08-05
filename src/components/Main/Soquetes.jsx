import React, { useEffect, useState } from "react";
import database from "../../firebaseConfig";
import "./Soquetes.css";

const Soquetes = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosRef = database.ref("productos");
        const snapshot = await productosRef.once("value");
        const data = snapshot.val();

        if (data) {
          setProductos(data.soquetes);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error al obtener los productos:", error);
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div className="soquetes-container">
      <div className="soquetes-header">
        <h2>SOQUETES</h2>
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="productos">
          {productos.map((producto) => (
            <figure className="product" key={producto.nombre}>
              <img src={producto.imagen} alt={producto.nombre} />
              <figcaption>{producto.nombre}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
};

export default Soquetes;
