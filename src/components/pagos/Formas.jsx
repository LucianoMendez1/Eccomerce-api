
import truckIcon from './icons/truck-solid.svg';
import creditCardIcon from './icons/credit-card-solid.svg'
import lockIcon from './icons/lock-solid.svg';
import './formas.css';

function Formas() {
  return (
    <div className="container">
      <div className="section">
        <img src={truckIcon} alt="Truck icon" className="icon" />
        <div className="text">
          <h2>ENVIAMOS TU COMPRA</h2>
          <p>Entregas a todo el país</p>
        </div>
      </div>
      <div className="section">
        <img src={creditCardIcon} alt="Credit card icon" className="icon" />
        <div className="text">
          <h2>PAGÁ COMO QUIERAS</h2>
          <p>Tarjetas de crédito o efectivo</p>
        </div>
      </div>
      <div className="section">
        <img src={lockIcon} alt="Lock icon" className="icon" />
        <div className="text">
          <h2>COMPRÁ CON SEGURIDAD</h2>
          <p>Tus datos siempre protegidos</p>
        </div>
      </div>
    </div>
  );
}

export default Formas;
