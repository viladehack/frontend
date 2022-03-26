import { useState } from "react";
import Restaurant from "../img/Restaurant.png";
import TeatreVIP from "../img/TeatreVIP.png";
import Entrada from "../img/Entrada.png";

const Canjeables = () => {
  const [verTicket, setVerTicket] = useState(false);
  const [verUsar, setVerUsar] = useState(false);

  function changeTicket() {
    verTicket ? setVerTicket(false) : setVerTicket(true);
  }
  function changeUser() {
    verUsar ? setVerUsar(false) : setVerUsar(true);
  }

  return (
    <div className="canjeables">
      <h1> Tienes: 1.000 vilacoints </h1>
      <div>
        <button type="button" onClick={changeTicket}>
          <h2>Ganar vilacoints</h2>
        </button>
        {verTicket && (
          <div className="ticket">
            <label for="ticket"> Envía tu ticket</label>
            <input
              type="file"
              id="ticket"
              name="ticket"
              accept="image/png, image/jpeg"
            ></input>
          </div>
        )}
      </div>
      <div>
        <button type="button" onClick={changeUser}>
          <h2 className="Title">Usar vilacoints</h2>
        </button>
        {verUsar && (
          <div className="usar">
            <a>
              <div className="HappyViller">
                <div className="textUsar">
                  <p>10% Descuento</p>
                  <p>Restaurante Karlota</p>
                  <p>100 vilacoint</p>
                </div>
                <img src={Restaurant} alt="Restaurant" className="Restaurant" />
              </div>
            </a>
            <a>
              <div className="HappyViller">
                <div className="textUsar">
                  <p>Reserva VIP</p>
                  <p>Teatre al Carrer</p>
                  <p>200 vilacoint</p>
                </div>
                <img src={TeatreVIP} alt="Teatre VIP" className="TeatreVIP" />
              </div>
            </a>
            <a>
              <div className="HappyViller">
                <div className="textUsar">
                  <p>3x2 Entradas</p>
                  <p>Museu de Viladecans</p>
                  <p>300 vilacoints</p>
                </div>
                <img src={Entrada} alt="3x2" className="TeatreVIP" />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Canjeables;
