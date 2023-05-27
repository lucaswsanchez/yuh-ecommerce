import "./Header.css";
import yuhlogo from "../assets/logo-yuh.png";

const Header = () => {
  return (
    <div className="header">
      <img src={yuhlogo} alt="yuhlogo" />
    </div>
  );
};

export default Header;
