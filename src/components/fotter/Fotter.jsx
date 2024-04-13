
import "./fotter.css";

const Fotter = () => {
  return (
    <div>
      <div className="container-fotter">
        <div className="nav">
          <h1>Navegacion</h1>
          <a href="">Productos</a>
          <a href="">Como Comprar</a>
          <a href="">Tabla de Talles</a>
          <a href="">Contacto</a>
        </div>
        <div className="mediosPago">
          <h1>medios de pago</h1>
          <div className="mediosPago-images">
            <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712592839/Ecommerce/iconos/visa_2x_ghherf.png" alt="" />
            <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712592837/Ecommerce/iconos/pagofacil_2x_lubqgd.png" alt="" />
            <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712592837/Ecommerce/iconos/other_2x_mv4zwl.png" alt="" />
            <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712592835/Ecommerce/iconos/amex_2x_xxrim8.png" alt="" />
          </div>
        </div>
        <div className="envio">
          <h1>envios</h1>
          <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712592839/Ecommerce/iconos/2682_2x_v3shej.png" alt="" />
        </div>
    
        </div>
    </div>
  );
};

export default Fotter;
