import { Link } from "react-router-dom";
import conectar from "../img/user.png";

const Header = ({ user }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img
            src="https://viladecans.thestyleoutlets.es/sites/all/modules/cmspl/cmspl_tso/svg-logo/svg-centers-logo/viladecans.svg"
            alt="Spain - Viladecans"
          />
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
