// Api.js
export const obtenerProductos = () => {
    return fetch('https://ecom-fake-api.onrender.com/t-shirts')
        .then(res => res.json())
        .then(json => {
            // Puedes realizar acciones adicionales con los datos aquí si es necesario
            return json; // Devolver los datos obtenidos para su uso posterior
        })
        .catch(error => {
            console.error('Error al obtener los datos de productos:', error);
            throw error; // Reenviar el error para manejarlo donde sea necesario
        });
};

export const obtenerChaquetas = () => {
    return fetch('https://ecom-fake-api.onrender.com/jackets')
        .then(res => res.json())
        .then(json => {
            // Puedes realizar acciones adicionales con los datos aquí si es necesario
            return json; // Devolver los datos obtenidos para su uso posterior
        })
        .catch(error => {
            console.error('Error al obtener los datos de chaquetas:', error);
            throw error; // Reenviar el error para manejarlo donde sea necesario
        });
};
