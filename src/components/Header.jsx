import "./Header.css";
import yuhlogo from "../assets/logo-yuh.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={yuhlogo} alt="yuhlogo" />
      </Link>
    </div>
  );
};

export default Header;
