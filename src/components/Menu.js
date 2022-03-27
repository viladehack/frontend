import promociones from "../img/promociones.png";
import productos from "../img/productos.png";
import miVisita from "../img/miVisita.png";
import marcas from "../img/marcas.png";
import whats from "../img/whats.png";
import HappyGreen from "../img/Firma.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <main>
      <div className="menu">
        <Link to="/">
          <div className="promociones">
            <img src={promociones} alt="Bolsa Sostenible" />
            <p>promociones</p>
          </div>
        </Link>
        <Link to="/">
          <div className="productos">
            <img src={productos} alt="Pantalones" />
            <p>productos</p>
          </div>
        </Link>
        <Link to="/">
          <div className="miVisita">
            <img src={miVisita} alt="Aquí Estoy" />
            <p>mi vista</p>
          </div>
        </Link>
      </div>

      <div className="menu">
        <Link to="/">
          <div className="marcas">
            <img src={marcas} alt="Estrella" />
            <p>marcas</p>
          </div>
        </Link>
        <Link to="/">
          <div className="whatsOn">
            <img src={whats} alt="Calendario" />
            <p>what's on</p>
          </div>
        </Link>
        <Link to="/HappyGreen">
          <div className="HappyGreen">
            <img src={HappyGreen} alt="Bolsa Sostenible" />
            <p>Happy Green</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Menu;
