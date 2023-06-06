import "./Footer.css";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
        <h5>NUESTRAS REDES</h5>
      <div className="footer-social-medias">
        <img src={instagram} alt="instagram" />
        <img src={whatsapp} alt="whatsapp" />
      </div>
    </div>
  );
};

export default Footer;
