
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Productos from './components/productos/Productos'; // Agregué la importación del componente Productos
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} /> {/* Moví esta línea para que esté dentro de <Routes> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
