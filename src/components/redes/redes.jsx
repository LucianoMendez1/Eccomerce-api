import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './redes.css';

const Redes = () => {
    const handleClick = () => {
        // Aquí puedes agregar la lógica para abrir una nueva pestaña o realizar otras acciones
        window.open('https://www.instagram.com/lucianomendez_'); // Abre el enlace en una nueva pestaña
    };

    return (
        <div className="container-redes">
            <div className="redes">
            <FontAwesomeIcon icon={faInstagram} />
                <div onClick={handleClick}>
                   
                    <h1>Seguinos en nuestro instagram </h1>
                </div>
            </div>
        </div>
    );
};

export default Redes;
