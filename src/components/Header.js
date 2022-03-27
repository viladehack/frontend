import { Link } from "react-router-dom";
import signature from "../img/Firma.png";
import conectar from "../img/user.png";

const Header = ({ user }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={signature} alt="Spain - Viladecans" />
          <p> HAPPY GREEN</p>
          <img src={signature} alt="Spain - Viladecans" />
        </Link>
        <div className="entrada">
          {user ? <h1>¡Hola {user}</h1> : <h1>¡Bienvenid@ Happy!</h1>}
          <Link to="/Sign">
            <img src={conectar} alt="conectar" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
