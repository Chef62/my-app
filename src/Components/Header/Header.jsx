import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://www.clipartmax.com/png/full/38-384065_black-and-white-logo-batman-clipart-library-clip-art-batman-logo-black.png"></img>
      <div className={s.liginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
