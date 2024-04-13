
import { useState, useEffect } from 'react';
import { obtenerProductos, obtenerChaquetas } from '../api/Api'; 
import Nav from '../navbar/Nav';
import './seleccion/selecion.css'
import './productos.css';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [chaquetas, setChaquetas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productosData, chaquetasData] = await Promise.all([obtenerProductos(), obtenerChaquetas()]);
                
                if (productosData && Array.isArray(productosData)) {
                    setProductos(productosData);
                } else {
                    console.error('La respuesta de la API de productos no es un array válido:', productosData);
                }

                if (chaquetasData && Array.isArray(chaquetasData)) {
                    setChaquetas(chaquetasData);
                } else {
                    console.error('La respuesta de la API de chaquetas no es un array válido:', chaquetasData);
                }
            } catch (error) {
                console.error('Error al obtener productos y chaquetas:', error);
            }
        };

        fetchData();
    }, []);

    const handleClick = () => {
        console.log('Implementa la lógica para redirigir a la página de detalles');
    };

    return (
        <div>
            <Nav/>
            <div className="productos-container">
                {productos.map(producto => (
                    <div key={producto.id} className="producto-card">
                        <img src={producto.picture} alt={producto.name} />
                        <h2>{producto.name}</h2>
                        <p>Precio: ${producto.price}</p>
                        <div className="button-seleccion">
                            <button onClick={handleClick}>Ver </button>
                        </div>
                    </div>
                ))}
            </div>
      
            <div className="productos-container">
                {chaquetas.map(chaqueta => (
                    <div key={chaqueta.id} className="producto-card">
                        <img src={chaqueta.picture} alt={chaqueta.name} />
                        <h2>{chaqueta.name}</h2>
                        <p>Precio: ${chaqueta.price}</p>
                        <div className="button-seleccion">
                            <button onClick={handleClick}>Ver </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;
