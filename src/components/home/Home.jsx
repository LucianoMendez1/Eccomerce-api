import Nav from "../navbar/Nav";
import Presentacion from "../present/Presentacion";
import Selecion from "../productos/seleccion/Selecion";
import Redes from "../redes/redes";
import Formas from "../pagos/Formas";
import Fotter from "../fotter/Fotter";
/* import Productos from "../productos/Productos"; */

const Home = () => {
    return (
        <div>
     
        
               <Nav/>
                <Presentacion/>
              {/*   <Productos/> */}
                <Selecion/>
                <Redes />
                <Formas/>
                <Fotter/>
         
        </div>
    );
};

export default Home;