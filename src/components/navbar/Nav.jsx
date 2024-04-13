import { useState } from "react";
import "./style.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const styleLinks =
    "text-[#ffffff] text-[3rem] md:text-[5.5rem] font-bold  uppercase";

  return (
    <div className="navigation ">
      <div
        className={`main-navigation ${
          toggle ? "main-navigation-active" : "main-navigation-close"
        }`}
      >
        <div
          className={`main-navigation-inner ${
            toggle
              ? "main-navigation-inner-active"
              : "main-navigation-inner-close"
          }`}
        >
          <ul className="">
            <li>
              <a
                href="/"
                className={`${styleLinks} link`}
                onClick={handleToggle}
              >
                INICIO <span className="spanLink">INICIO </span>
              </a>{" "}
            </li>
            <li>
              <a
                href="#Artistas"
                className={`${styleLinks} link`}
                onClick={handleToggle}
              >
                Remeras <span className="spanLink">Remeras </span>
              </a>
            </li>
            <li>
              <a
                href="#Artistas"
                className={`${styleLinks} link`}
                onClick={handleToggle}
              >
                Busos <span className="spanLink">Busos </span>
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>

      <div
        className={`main-navigation-duplicate-1 ${
          toggle
            ? "main-navigation-duplicate-1-active"
            : "main-navigation-duplicate-1-close"
        }`}
      >
        {" "}
      </div>
      <div
        className={`main-navigation-duplicate-2 ${
          toggle
            ? "main-navigation-duplicate-2-active"
            : "main-navigation-duplicate-2-close"
        }`}
      >
        {" "}
      </div>

      <div className="hamburger" onClick={handleToggle}>
        <div className={`bar first ${toggle && "first_active"}`}></div>
        <div className={`bar middle ${toggle && "middle_active"}`}></div>
        <div className={`bar last ${toggle && "last_active"}`}></div>
        <strong className={`menuButton  ${toggle && "menu_active"}`}>
          Menu
        </strong>
      </div>
      <div>
          <div className="logo">
            <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1712622914/Ecommerce/logo-1590020831-1696194756-2b44148e3a5edc99d44f0a9c8ad5e4111696194756-320-0-removebg-preview_fkmmrv.png" alt="" />
          </div>
    </div>
    <div className="login">

    </div>
    <div className="carrito">
      
    </div>
    </div>
    
  );
};

export default Nav;
