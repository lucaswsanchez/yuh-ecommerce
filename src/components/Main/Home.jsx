import "./Home.css";
import { Link } from "react-router-dom";
import medias from "../../assets/adidasfrancia.png";
import soquetes from "../../assets/caritayrayo.png";

const Home = () => {
  return (
    <div className="home">
      <h2>BIENVENIDO A NUESTRA PAGINA WEB!</h2>
      <h4>¿QUE ESTAS BUSCANDO?</h4>
      <div className="medias-soquetes">
        <div className="medias">
          <img src={medias} alt="medias" />
          <Link to="/medias">
            <button>Medias</button>
          </Link>
        </div>
        <div className="soquetes">
          <img src={soquetes} alt="soquetes" />
          <Link to="/soquetes">
            <button>Soquetes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
