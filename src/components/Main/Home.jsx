import "./Home.css";
import { Link } from "react-router-dom";
import medias from "../../assets/medias.webp";
import soquetes from "../../assets/soquetes.webp";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h3>¿QUE ESTAS BUSCANDO?</h3>
      </div>
      <div className="medias-soquetes">
        <Link className="white" to="/medias">
          <div className="medias">
            <img src={medias} alt="medias" />
            <button>MEDIAS</button>
          </div>
        </Link>
        <Link className="white" to="/soquetes">
          <div className="soquetes">
            <img src={soquetes} alt="soquetes" />
            <button>SOQUETES</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
