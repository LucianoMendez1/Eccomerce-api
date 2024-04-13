import './selecion.css';
import { obtenerProductos } from '../../api/Api'; // Corregir la ruta de importación

const Selecion = () => {
  const handleClick = () => {
      obtenerProductos()
          .then(data => {
              console.log('Datos obtenidos:', data);
              // Redirige a la página de Productos
              window.location.href = '/productos';
          })
          .catch(error => {
              // Manejar errores si ocurren durante la obtención de datos
              console.error('Error al obtener productos:', error);
          });
  };

  return (
    <div className="container-select">
      <div className="container-img">
        <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712188417/Ecommerce/2-img-361048560-1708566075-c80c259cb799eb8999ab2b95e08203c61708566076-640-0_xymy9u.jpg" alt="" />
        <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712188417/Ecommerce/2-img-361048560-1708566075-c80c259cb799eb8999ab2b95e08203c61708566076-640-0_xymy9u.jpg" alt="" />
        <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712188417/Ecommerce/2-img-361048560-1708566075-c80c259cb799eb8999ab2b95e08203c61708566076-640-0_xymy9u.jpg" alt="" />
        <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712188417/Ecommerce/2-img-361048560-1708566075-c80c259cb799eb8999ab2b95e08203c61708566076-640-0_xymy9u.jpg" alt="" />
      </div>
      <div className="button-seleccion">
        <button onClick={handleClick}>Ver todos los Productos</button>
      </div>
    </div>
  );
};

export default Selecion;
